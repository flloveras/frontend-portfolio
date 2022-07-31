export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    info: String;
    urlfoto: String;

    constructor (nombre: String, apellido: String, titulo: String, info: String, urlfoto: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.info = info;
        this.urlfoto = urlfoto;
    }
}