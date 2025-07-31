import { useState } from "react";

import ReposList from "./components/ReposList";

function App() {
  //const [formularioEstaVisivel, setformularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
 console.log(nomeUsuario);
  return(
    <>
      <header className="header">
          <span>Buscar Usuario Github</span>
          <input type="text" id="nomeUsuario" placeholder='Insira usuario Github' required />
          <button onClick={(e) => setNomeUsuario(document.getElementById('nomeUsuario').value)}>Ver Repositorios</button>
      </header>
      {(nomeUsuario.length > 4) && (
        <>
        <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
        
      
      {/* { 
      formularioEstaVisivel && (
      <Formulario />
      )}
      <button onClick={() => setformularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
       */}
    </>
  )
}

export default App
