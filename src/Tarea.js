import { useState, useEffect } from 'react';


export function Tareas(){
    return(
        <>
        <ul>

        <li>
        <span>V</span>
        <p>Mi Tarea</p>
        <span>X</span>
        </li>
        </ul>
        </>
    )
}


export function TemporizadorHola() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    // 1. Creamos el intervalo
    const intervalo = setInterval(() => {
      console.log("Hola Mundo");
      setMostrar(prev => !prev); // Cambia de true a false y viceversa
    }, 1000); // 1000ms = 1 segundo

    // 2. IMPORTANTE: Limpiamos el intervalo cuando el componente se destruye
    return () => clearInterval(intervalo);
  }, []); 

  return (
    <div>
      {mostrar ? <h2>¡Hola Mundo!</h2> : <h2>...</h2>}
    </div>
  );
}