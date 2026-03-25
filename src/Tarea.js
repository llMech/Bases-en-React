import { useState, useEffect } from "react";
import "./Tarea.css";

export function Tareas({ alHacerClick, contador }) {
  const [listaTareas, setListaTareas] = useState(() => {
    const guardadas = localStorage.getItem("tareas");
    return guardadas
      ? JSON.parse(guardadas)
      : [
          { id: 1, texto: "mi tarea 1", completada: false },
          { id: 2, texto: "mi tarea 2", completada: false },
          { id: 3, texto: "mi tarea 3", completada: false },
          { id: 4, texto: "mi tarea 4", completada: false },
          { id: 5, texto: "mi tarea 5", completada: false },
        ];
  });

  const [nuevaTarea, setNuevaTarea] = useState("");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(listaTareas));
  }, [listaTareas]);

  const manejarCambio = (e) => setNuevaTarea(e.target.value);
  const manejarBusqueda = (e) => setBusqueda(e.target.value);

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

  // Filtra las tareas según la búsqueda
  const tareasFiltradas = listaTareas.filter((t) =>
    t.texto.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="tareas-container">

      {/* Buscador */}
      <div className="buscador-wrapper">
        <span className="buscador-icono">🔍</span>
        <input
          className="input-buscador"
          value={busqueda}
          onChange={manejarBusqueda}
          placeholder="Buscar tarea..."
        />
        {busqueda && (
          <button className="btn-limpiar" onClick={() => setBusqueda("")}>✕</button>
        )}
      </div>

      {/* Input para nueva tarea */}
      <input
        className="input-top"
        value={nuevaTarea}
        onChange={manejarCambio}
        placeholder="Añade una tarea"
      />

      <ul className="lista-tareas">
        {tareasFiltradas.length > 0 ? (
          tareasFiltradas.map((tarea) => (
            <li key={tarea.id} className="tarea-item">
              <button className="btn-completar" onClick={() => toggleCompletada(tarea.id)}>
                {tarea.completada ? "✓" : "V"}
              </button>
              <span className={tarea.completada ? "tarea-texto completada" : "tarea-texto"}>
                {tarea.texto}
              </span>
              <button className="btn-eliminar" onClick={() => eliminarTarea(tarea.id)}>X</button>
            </li>
          ))
        ) : (
          <li className="sin-resultados">No se encontraron tareas</li>
        )}
      </ul>

      <div className="bottom-bar">
        <p className="click-info">Diste click {contador} veces</p>
        <div className="bottom-actions">
          <button className="btn-click" onClick={alHacerClick}>Click</button>
          <button className="btn-float" onClick={agregarTarea}>+</button>
        </div>
      </div>
    </div>
  );
}