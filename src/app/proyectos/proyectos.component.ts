import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

 misProyectos:Proyecto[] = [
   {
     name:"Portfolio",
     urlImagen:"https://image.freepik.com/vector-gratis/diseno-fondo-portfolio_1300-242.jpg",
     descripcion: "Muestra el portofolio de mis proyectos de programacion realizados de manera publica para que puedan observar la calidad de mi trabajo"
   },

   {
     name:"Software",
     urlImagen:"https://chiefexecutive.net/wp-content/uploads/2018/11/AdobeStock_92323963-compressor-1024x662.jpeg",
     descripcion: "Creacion de Software a la medida para pequeñas, medianas y grandes empresas, para solventar cualquier necesidad que surga dentro de la institucion"
   }]
  constructor() { }

  ngOnInit() {
    let proyecto:Proyecto = new Proyecto("Maiame", "https://image.freepik.com/vector-gratis/diseno-fondo-portfolio_1300-242.jpg")
    this.misProyectos.push(proyecto)


  }

  agregarProyecto(nombre:string,url:string){




  }

}
