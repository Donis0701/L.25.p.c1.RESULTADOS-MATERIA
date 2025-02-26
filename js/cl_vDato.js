import cl_vEstudiante from "./cl_vEstudiante.js";
import cl_mEstudiante from "./cl_mEstudiante.js";
export default class cl_vDato {
    constructor(){
        this.controlador = null;
        this.lblEstudiantesAprobados = document.getElementById("mainForm_lblEstudiantesAprobados");
        this.lblEstudiantesNoAprobados = document.getElementById("mainForm_lblEstudiantesNoAprobados");
        this.lblPromedioEstudiantes = document.getElementById("mainForm_lblPromedioEstudiantes");
        this.vEstudiante = new cl_vEstudiante();
        this.vEstudiante.btProcesar.onclick = () => this.controlador.procesarEstudiante();
    }
    procesarEstudiante(){
        this.mEstudiante = new cl_mEstudiante({
            cedula : this.vEstudiante.cedula,
            nota : this.vEstudiante.nota
        })
        return this.mEstudiante;
    }
    reporteEstudiantes(estudiantesAprobados,estudiantesNoAprobados,promedioEstudiantes){
        this.lblEstudiantesAprobados.innerHTML = estudiantesAprobados;
        this.lblEstudiantesNoAprobados.innerHTML = estudiantesNoAprobados;
        this.lblPromedioEstudiantes.innerHTML = promedioEstudiantes;
    }
}