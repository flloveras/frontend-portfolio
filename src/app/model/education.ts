export class Education {
    idEdu? : number;
    institutoEdu : string;
    tituloEdu : string;
    urlfotoEdu : string;
    aniodesdeEdu : number;
    aniohastaEdu : number;

    constructor (institutoEdu : string, tituloEdu : string, urlfotoEdu : string, aniodesdeEdu : number, aniohastaEdu : number) {
this.institutoEdu = institutoEdu;
this.tituloEdu = tituloEdu;
this.urlfotoEdu = urlfotoEdu;
this.aniodesdeEdu = aniodesdeEdu;
this.aniohastaEdu = aniohastaEdu
    }
}


