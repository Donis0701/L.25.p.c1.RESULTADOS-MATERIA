export default class cl_mDato {
    constructor(){
        this.cntAP= 0;
        this.cntNA= 0;
        this.acumNota = 0;
        this.cntEstu = 0;
    }
    procesarEstudiante(estudiante){
        this.acumNota += estudiante.nota;
        this.cntEstu++;
        if(estudiante.nota >= 48){
            this.cntAP++;
        }
        else{
            this.cntNA++;
        }
    }
    estudiantesAprobados(){
        return this.cntAP;}
    estudiantesNoAprobados(){
        return this.cntNA;
    }    
    promedioEstudiantes(){
        return this.acumNota/this.cntEstu;}
}