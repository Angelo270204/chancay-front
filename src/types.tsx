export interface Embarcacion {
    id: number;  // Identificador único de la embarcación
    nombre: string;  // Nombre de la embarcación
    capacidad: number;  // Capacidad en toneladas de la carga
    descripcion: string;  // Descripción de la embarcación
    fechaProgramada: string;  // Fecha programada (en formato ISO 8601)
}