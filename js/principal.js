/*Sea la informacion de varios estudiantes: cedula y nota final.Se sabe que los estudiantes
aprueban con 48pts.Se desea procesar a varios estudiantes t determinar la siguiente estadistica:

a) Cantidad de estudiantes que aprueban
b) Cantidad de estudiantes que no aprueban
c) nota promedio de la seccion */
import cl_vDato from "./cl_vDato.js";
import cl_mDato from "./cl_mDato.js";
import cl_controlador from "./cl_controlador.js";
export default class cl_principal{
    constructor(){
        let modelo = new cl_mDato();
        let vista = new cl_vDato();
        let controlador = new cl_controlador(modelo,vista);
        vista.controlador = controlador;

    }
}