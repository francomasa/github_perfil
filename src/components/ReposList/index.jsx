import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const[repos, setRepos] = useState([]);

    const [estaCargando, setEstaCargando] = useState(true);

    const [deuError, setError] = useState(true);

    useEffect(() => {
        setEstaCargando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCargando(false);
                setRepos(resJson);
                setError(false);
            }, 2000);
        })
        .catch(e => {
            setError(true);
            throw new Error(`Usuario ${nomeUsuario} não existe`);
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            { estaCargando ? (
                <h1>Carregando...</h1>
            ) : (
                (deuError || (repos.status === '404')) ? (
                    <h1>usuario no encontrado</h1> 
                ) : (
                <>
                <h3>Repositorios</h3>
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({id, name, language, html_url}) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> 
                                {name}
                            </div>
                            <div className={styles.itemLanguage}>
                                <b>Linguage:</b> 
                                {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
                </>
                )
            )}        
        </div>
    )
}

export default ReposList;