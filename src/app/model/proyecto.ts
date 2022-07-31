export class Proyecto {
    idProye? : number;
    nombreProye : string;
    urlProye : string;
    descripcionProye : string;
    anioProye : number;

    constructor(nombreProye: string, urlProye: string, descripcionProye: string,  anioProye : number){
        this.nombreProye = nombreProye;
        this.urlProye = urlProye;
        this.descripcionProye = descripcionProye;
        this.anioProye = anioProye;
}
}
