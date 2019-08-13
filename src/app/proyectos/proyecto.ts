export class Proyecto {
    name:string;
    urlImagen:string;
    descripcion: string;
    constructor (nombre:string,url?:string){
if (url) {
    this.urlImagen = url;
    this.name = nombre;
}
   else {
       this.urlImagen = "";
       this.name = nombre;
   }
    }
}
