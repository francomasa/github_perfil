import { useState } from "react";

import ReposList from "./components/ReposList";

function App() {
  //const [formularioEstaVisivel, setformularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
 
  return(
    <>
      <header className="header">
          <span>Buscar Usuario Github</span><br />
          <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder='Insira usuario Github' />
      </header>
      {nomeUsuario.length > 4 && (
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
