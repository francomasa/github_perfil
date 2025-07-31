import { useState, useEffect } from 'react';

import styles from './BuscarUser.module.css'

// Podemos exportar uma arrow function sem nome
// export default () => {} 
// tambem desta maneira
// export default function() {} 
const BuscarUser = ({ nomeUsuario }) => {
    const [usuario, setUsuario] = useState(nomeUsuario);
    const [repositorio, setRepositorio] = useState([]);
    const [findUser, setFindUser] = useState(true);
    console.log(nomeUsuario);

        useEffect(() => {
                //fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
                fetch(`https://api.github.com/users/${usuario}/repos`)
                .then(res => res.json())
                .then(resJson => {
                    setRepositorio(resJson);
                    setFindUser(true);
                    console.log(resJson);
                })
                .catch(e => {
                    setFindUser(false);
                    console.log(e);
                    setUsuario('');
                })
            }, [usuario]);
    

    if(repositorio.status){
        setFindUser(false);
    }
    
    return (
        
        <header className={styles.header}>
            <span>Buscar Usuario Github</span><br />
            <input type="text" value={nomeUsuario} onBlur={(e) => setUsuario(e.target.value)} placeholder='Insira usuario Github' />
            {(!findUser) && (repositorio.length === 0) && (<span>Usuario no existe {user}</span>)}
        </header>
        
    )
}

export default BuscarUser;