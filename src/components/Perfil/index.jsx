import { useEffect, useState } from "react";

import styles from './Perfil.module.css'

// Podemos exportar uma arrow function sem nome
// export default () => {} 
// tambem desta maneira
// export default function() {} 
const Perfil = ({ nomeUsuario }) => {
    const [usuario, setUsuario] = useState([]);
    const [mostrarUser, setMostrarUser] = useState(false);
    console.log(nomeUsuario);
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}`)
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setUsuario(resJson);
                setMostrarUser(true);
            }, 2000);
        })
        .catch(e => {
            setMostrarUser(false);
            throw new Error(`Usuario ${nomeUsuario} no encontrado`);
        })
    }, [nomeUsuario]);

    console.log(usuario.status);
    if(usuario.status) {
        setMostrarUser(false);
    }
    return (
        (mostrarUser) && (usuario.login) && (
        <div className={styles.header}>
            {/* { JSON.stringify(props)} */}
            <img className={styles.avatar} src={usuario.avatar_url} alt={`Avatar de ${usuario.login}`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </div>
        )
    )
}

export default Perfil;