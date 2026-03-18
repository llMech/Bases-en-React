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