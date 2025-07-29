import { useEffect, useState } from "react";

import styles from './Perfil.module.css'

// Podemos exportar uma arrow function sem nome
// export default () => {} 
// tambem desta maneira
// export default function() {} 
const Perfil = ({ nomeUsuario }) => {
    const [usuario, setUsuario] = useState([]);
    const [mostrarUser, setMostrarUser] = useState(false);
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setMostrarUser(true);
                setUsuario(resJson);
            }, 2000);
        })
        .catch(e => {
            setMostrarUser(false);
            throw new Error(`Usuario ${nomeUsuario} não existe`);
            
        })
    }, [nomeUsuario]);
    console.log(usuario);
    if(usuario.status && usuario.status === '404'){
        setMostrarUser(false);
    }
    return (
        (mostrarUser) && (
        <header className={styles.header}>
            {/* { JSON.stringify(props)} */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt={`Avatar de ${nomeUsuario}`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </header>
        )
    )
}

export default Perfil;