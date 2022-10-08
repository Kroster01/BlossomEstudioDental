import { dateFirebase } from "./general.inteface";

export interface PagosInterface {
    id?: string,
    nombre?: string,
    apellido?: string,
    descripcion?: string,
    fecha?: dateFirebase,
    monto?: number,
    estado?: number,
    observacion?: string,
    pagoHonorario?: boolean,
    createReg?: dateFirebase,
}
