// useState para definir campos que se atualizaram automaticamente
// useEffect para realizar algo apos a mudança de algum campo

import { useState, useEffect } from "react";

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');


    // quando o useEffect é montado e llamado de "mount"
    // quando e modificado e llamado de "update"
    // quando é desmontado é llamado de "onmount"
    useEffect(() => {
        console.log('o componente iniciou');

        return ()=> {
            console.log("o componente finalizou")
        }
    }, []);
    
    useEffect(() => {
        console.log('o estado nome mudo');
    }, [nome]);
    
    
    useEffect(() => {
        console.log('o estado materia mudo' + materiaA + materiaB + materiaB);
    }, [materiaA, materiaB, materiaC]);

    const alteraNome = (evento) => {
        //console.log(evento.target.value);
        //setNome(evento.target.value);
        setNome(estadoAnterior => {
            //console.log(estadoAnterior);
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7){
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        }
        else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }
    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input onChange={({ target }) => setMateriaA(parseInt(target.value))} type="number" placeholder="Nota Materia A" />
            <input onChange={evento => setMateriaB(parseInt(evento.target.value))} type="number" placeholder="Nota Materia B" />
            <input onChange={evento => setMateriaC(parseInt(evento.target.value))} type="number" placeholder="Nota Materia C" />
            {renderizaResultado()}
        </form>

        
    )
}

export default Formulario;