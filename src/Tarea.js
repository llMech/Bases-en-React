import { useState } from "react";
import "./Tarea.css";

export function Tareas({ alHacerClick, contador }) {
  const [listaTareas, setListaTareas] = useState([
    { id: 1, texto: "mi tarea 1", completada: false },
    { id: 2, texto: "mi tarea 2", completada: false },
    { id: 3, texto: "mi tarea 3", completada: false },
    { id: 4, texto: "mi tarea 4", completada: false },
    { id: 5, texto: "mi tarea 5", completada: false },
  ]);

  const [nuevaTarea, setNuevaTarea] = useState("");

  const manejarCambio = (e) => setNuevaTarea(e.target.value);

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;
    setListaTareas([...listaTareas, { id: Date.now(), texto: nuevaTarea, completada: false }]);
    setNuevaTarea("");
  };

  const eliminarTarea = (id) => {
    setListaTareas(listaTareas.filter((t) => t.id !== id));
  };

  const toggleCompletada = (id) => {
    setListaTareas(listaTareas.map((t) =>
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  return (
    <div className="tareas-container">
      <input
        className="input-top"
        value={nuevaTarea}
        onChange={manejarCambio}
        placeholder="Añade una tarea"
      />

      <ul className="lista-tareas">
        {listaTareas.map((tarea) => (
          <li key={tarea.id} className="tarea-item">
            <button className="btn-completar" onClick={() => toggleCompletada(tarea.id)}>
              {tarea.completada ? "✓" : "V"}
            </button>
            <span className={tarea.completada ? "tarea-texto completada" : "tarea-texto"}>
              {tarea.texto}
            </span>
            <button className="btn-eliminar" onClick={() => eliminarTarea(tarea.id)}>X</button>
          </li>
        ))}
      </ul>

      {/* Texto "Diste click" encima del botón Click */}
      <div className="bottom-bar">
        <p className="click-info">Diste click {contador} veces</p>
        <button className="btn-click" onClick={alHacerClick}>Click</button>
      <button className="btn-float" onClick={agregarTarea}>+</button>
      </div>

    </div>
  );
}