import './App.css';
import { useState } from 'react';
import { Tareas } from './Tarea.js'; 

function App() {

  
  const [click, setclick] = useState(0);
  const [cadena, setcadena] = useState('');
  
  const manejarclick = () => {
    setclick(prev => prev + 1);
  };

  // Recibimos el evento 'e' para capturar el valor del input
  const manejarEscritura = (e) => {
    setcadena(e.target.value);
  };
 

  return (
    <>
      <Titulo2 texto={cadena} />
      <Titulo contador={click} />
      <Barra alCambiar={manejarEscritura} />
      <Boton alHacerClick={manejarclick} />
      <Tareas />
    </>
  );
}


function Titulo({ contador }) {
  return (
    <h1>Tareas Completadas {contador} de 5</h1>
  );
}

function Titulo2({ texto }) {
  return (
    <h1>Cadena ingresada: {texto}</h1>
  );
}


function Barra({ alCambiar }) {
  return (
    <input onChange={alCambiar} placeholder='Escribe algo aqui...' />
  );
}

function Boton({ alHacerClick }) {
  return (
    <button onClick={alHacerClick}>Incrementar Contador</button>
  );
}

export default App;