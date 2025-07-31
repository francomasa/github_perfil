import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";
import BuscarUser from "./components/BuscarUser";

function App() {
  //const [formularioEstaVisivel, setformularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
 
  return(
    <>
      <header className="header">
          <span>Buscar Usuario Github</span><br />
          <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder='Insira usuario Github' />
      </header>

      {/* <header>
            <span>Buscar Usuario Github</span><br />
            <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} placeholder="Insira nome de usuario" />
      </header> */}
      {nomeUsuario.length > 4 && (
        <>
        <Perfil nomeUsuario={nomeUsuario} />
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
