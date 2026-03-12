import './App.css';
import { useState } from 'react';
import { Tareas } from './Tarea.js';


function App() {
  const [click, setclick] = useState(0);


  const manejarclick = () => {
    setclick(prev => prev + 1);
  };
 
  return (
    <>
      <Titulo contador={click} />
      <Barra />
      <Boton alHacerClick={manejarclick} />
      <Tareas />
      <Tareas />
    </>
  );
}


function Barra() {
  return (
    <input placeholder='Escribe algo aqui...' />
  );
}


function Titulo(props) {
  return (
    <h1>Tareas Completadas {props.contador} de 5</h1>
  );
}


function Boton({ alHacerClick }) {
  return (
    <button onClick={alHacerClick}>Click</button>
  );
}


export default App;
