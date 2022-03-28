export interface Iempleado {
    id?: number;
    nombre: string;
    cargoID: string;
    departamentoID: string;
    sueldo: number;
    estado: number;
    create_at: Date;
}