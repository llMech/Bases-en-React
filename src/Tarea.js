import { useState } from "react";

export function Tareas() {
  const [listaTareas, setListaTareas] = useState([
    { id: 1, texto: "Hacer la compra" },
    { id: 2, texto: "Llamar medico" },
    { id: 3, texto: "Estudiar react" },
  ]);

  const [nuevaTarea, setNuevaTarea] = useState("");

  const manejarCambio = (e) => {
    setNuevaTarea(e.target.value);
  };

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    const tareaNuevaObjeto = {
      id: Date.now(),
      texto: nuevaTarea,
    };

    setListaTareas([...listaTareas, tareaNuevaObjeto]);
    setNuevaTarea("");
  };

  return (
    <>
      <hr />
      <h1>Mis tareas</h1>
      <input
        value={nuevaTarea}
        onChange={manejarCambio}
        placeholder="Añade una tarea"
      />
      <button onClick={agregarTarea}>Añadir</button>

      <ul>
        {listaTareas.map((tarea) => (
          <li key={tarea.id}>{tarea.texto}</li>
        ))}
      </ul>
    </>
  );
}
