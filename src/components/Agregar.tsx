import React, { useState, useEffect } from "react"; // Importamos los hooks
import { Embarcacion } from "../types"; // Importamos la interfaz de la embarcación
import { TextField, Button, Container, Box } from '@mui/material';

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ nombre, capacidad, descripcion, fechaProgramada });
    // Limpiar los campos después de enviar el formulario
    setNombre('');
    setCapacidad(0);
    setDescripcion('');
    setFechaProgramada('');
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          id="nombre"
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          id="capacidad"
          label="Capacidad"
          value={capacidad}
          onChange={(e) => setCapacidad(Number(e.target.value))}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          id="descripcion"
          label="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          id="fechaProgramada"
          label="Fecha Programada"
          type="date"
          value={fechaProgramada}
          onChange={(e) => setFechaProgramada(e.target.value)}
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
          Guardar
        </Button>
        {onCancel && (
          <Button type="button" variant="outlined" color="secondary" fullWidth sx={{mb:2}} onClick={onCancel}>
            Cancelar
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default EmbarcacionForm;