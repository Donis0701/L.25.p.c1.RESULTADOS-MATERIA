export default class cl_mEstudiante {
    constructor({cedula,nota}) {
        this.cedula = cedula;
        this.nota = nota;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    set nota(nota) {
        this._nota = +nota;
    }
    get cedula() {
        return this._cedula;
    }
    get nota() {
        return this._nota;
    }
}
    