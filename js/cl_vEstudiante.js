export default class cl_vEstudiante{
    constructor(){
        this.inCedula = document.getElementById("estudianteForm_inCedula");
        this.inNota = document.getElementById("estudianteForm_inNota");
        this.btProcesar = document.getElementById("estudianteForm_btProcesar");
    }
    get cedula (){
        return this.inCedula.value;
    }
    get nota (){
        return +this.inNota.value;
    }
}