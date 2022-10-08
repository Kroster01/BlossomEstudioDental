import { dateFirebase } from "./general.inteface";

export interface ProfesionalInterface {
    id?: string,
    nombre?: string,
    apellido?: string,
    rut?: string,
    especialidad?: string,
    estado?: boolean,
    createReg?: dateFirebase,
}
