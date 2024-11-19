import React, { useState, useEffect } from "react"; // Importamos los hooks
import { Embarcacion } from "../types"; // Importamos la interfaz de la embarcación

// Definimos las propiedades que recibirá este componente
interface EmbarcacionFormProps {
  // Función que se ejecutará cuando se envíe el formulario
  onSubmit: (embarcacion: Embarcacion | Omit<Embarcacion, "id">) => void;
  // Datos iniciales para editar
  initialData?: Embarcacion;
  // Función para cancelar la edición
  onCancel?: () => void;
}

const EmbarcacionForm: React.FC<EmbarcacionFormProps> = ({
  onSubmit,
  initialData,
  onCancel,
}) => {
  // Estados de los campos del formulario
  const [nombre, setNombre] = useState(initialData?.nombre || ""); // Estado para el nombre
  const [capacidad, setCapacidad] = useState(initialData?.capacidad || 0); // Estado para la capacidad
  const [descripcion, setDescripcion] = useState(initialData?.descripcion || ""); // Estado para la descripción
  const [fechaProgramada, setFechaProgramada] = useState(initialData?.fechaProgramada || ""); // Estado para la fecha programada

  // Hook que actualiza los campos del formulario cuando se cambia el valor de initialData
  useEffect(() => {
    if (initialData) {
      setNombre(initialData?.nombre || "");
      setCapacidad(initialData?.capacidad || 0);
      setDescripcion(initialData?.descripcion || "");
      setFechaProgramada(initialData?.fechaProgramada || "");
    }
  }, [initialData]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ nombre, capacidad, descripcion, fechaProgramada });
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
    >
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ display: 'block', marginTop: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="capacidad">Capacidad:</label>
        <input
          id="capacidad"
          type="number"
          value={capacidad}
          onChange={(e) => setCapacidad(Number(e.target.value))}
          style={{ display: 'block', marginTop: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="descripcion">Descripción:</label>
        <input
          id="descripcion"
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={{ display: 'block', marginTop: '5px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="fechaProgramada">Fecha Programada:</label>
        <input
          id="fechaProgramada"
          type="date"
          value={fechaProgramada}
          onChange={(e) => setFechaProgramada(e.target.value)}
          style={{ display: 'block', marginTop: '5px' }}
        />
      </div>
      <button type="submit" style={{ marginTop: '10px',marginBottom:'25px' }}>Guardar</button>
      {onCancel && <button type="button" onClick={onCancel} style={{ marginTop: '10px' }}>Cancelar</button>}
    </form>
  );
};

export default EmbarcacionForm;