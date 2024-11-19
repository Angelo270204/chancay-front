import React from "react";
import { Embarcacion } from "../types";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Definimos las propiedades que recibirá este componente
interface EmbarcacionTableProps {
  embarcaciones: Embarcacion[]; // Lista de embarcaciones a mostrar
  onEdit: (embarcacion: Embarcacion) => void; // Función cuando se edite
  onDelete: (id: number) => void; // Función para eliminar la embarcación
}

// Definimos el componente EmbarcacionTable
const EmbarcacionTable: React.FC<EmbarcacionTableProps> = ({
  embarcaciones,
  onEdit,
  onDelete,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Capacidad</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Fecha Programada</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {embarcaciones.map((embarcacion) => (
            <TableRow key={embarcacion.id}>
              <TableCell>{embarcacion.id}</TableCell>
              <TableCell>{embarcacion.nombre}</TableCell>
              <TableCell>{embarcacion.capacidad}</TableCell>
              <TableCell>{embarcacion.descripcion}</TableCell>
              <TableCell>{embarcacion.fechaProgramada}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => onEdit(embarcacion)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(embarcacion.id)} color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmbarcacionTable;