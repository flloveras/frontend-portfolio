export class Experiencia {
    idExp? : number;
    puestoExp : string;
    descripcionExp : string;
    empresaExp : string;
    aniodesdeExp : number;
    aniohastaExp : number;

    constructor(puestoExp: string, descripcionExp: string, empresaExp: string, aniodesdeExp : number, aniohastaExp : number){
        this.puestoExp = puestoExp;
        this.descripcionExp = descripcionExp;
        this.empresaExp = empresaExp;
        this.aniodesdeExp = aniodesdeExp;
        this.aniohastaExp = aniohastaExp;
}
}