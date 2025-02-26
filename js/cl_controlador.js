export default class cl_controlador{
    constructor(modelo,vista){
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarEstudiante(){
        this.modelo.procesarEstudiante(this.vista.procesarEstudiante());
        this.vista.reporteEstudiantes(
            this.modelo.estudiantesAprobados(),
            this.modelo.estudiantesNoAprobados(),
            this.modelo.promedioEstudiantes()
        );
    }
}