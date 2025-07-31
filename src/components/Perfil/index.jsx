import { useEffect, useState } from "react";

import styles from './Perfil.module.css'

// Podemos exportar uma arrow function sem nome
// export default () => {} 
// tambem desta maneira
// export default function() {} 
const Perfil = ({ nomeUsuario }) => {
    return (
        <div className={styles.header}>
            {/* { JSON.stringify(props)} */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt={`Avatar de ${nomeUsuario}`} />
            <h1 className={styles.name}>
                {nomeUsuario}
            </h1>
        </div>
        // )
    )
}

export default Perfil;