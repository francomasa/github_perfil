import { useState, useEffect } from 'react';
import styles from './BuscarUser.module.css'

// Podemos exportar uma arrow function sem nome
// export default () => {} 
// tambem desta maneira
// export default function() {} 
const BuscarUser = () => {
    const [repositorio, setRepositorio] = useState([]);
    const [user, setUser] = useState('');
    const [findUser, setFindUser] = useState(true);

    if(user !== ''){
        
        useEffect(() => {
                //fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
                fetch(`https://api.github.com/users/${user}/repos`)
                .then(res => res.json())
                .then(resJson => {
                        setRepositorio(resJson);
                })
                .catch(e => {
                    setFindUser(false);
                    setUser('');
                })
            }, [user]);
    }
    
    return (
        
        <header className={styles.header}>
            <span>Buscar Usuario Github</span><br />
            <input type="text" onBlur={(e) => setUser(e.target.value)} placeholder='Insira usuario Github' />
            {(!findUser) && (user.length === 0) && (<span>Usuario no existe {user}</span>)}
        </header>
        
    )
}

export default BuscarUser;