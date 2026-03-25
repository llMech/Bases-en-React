import './App.css';
import { useState, useEffect } from 'react';
import { Tareas } from './Tarea.js';

function App() {
  const [click, setclick] = useState(() => {
    const guardado = localStorage.getItem("contador");
    return guardado ? parseInt(guardado) : 0;
  });

  // Guarda el contador cada vez que cambia
  useEffect(() => {
    localStorage.setItem("contador", click);
  }, [click]);

  const manejarclick = () => {
    setclick(prev => prev + 1);
  };

  return (
    <>
      <Titulo contador={click} />
      <Tareas alHacerClick={manejarclick} contador={click} />
    </>
  );
}

function Titulo({ contador }) {
  return (
    <h1>has compltado <strong>{contador}</strong> tareas de <strong>20</strong></h1>
  );
}

export default App;