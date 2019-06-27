import { Component, OnInit } from '@angular/core';
import { Proyecto } from './proyecto';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

 misProyectos:Proyecto[] = [{name:"Portfolio", urlImagen:"https://image.freepik.com/vector-gratis/diseno-fondo-portfolio_1300-242.jpg"}, {name:"Software", urlImagen:"https://chiefexecutive.net/wp-content/uploads/2018/11/AdobeStock_92323963-compressor-1024x662.jpeg"}]
  constructor() { }

  ngOnInit() {
    let proyecto:Proyecto = new Proyecto("Maiame", "https://image.freepik.com/vector-gratis/diseno-fondo-portfolio_1300-242.jpg")
    this.misProyectos.push(proyecto)
    

  }

  agregarProyecto(nombre:string,url:string){
    
    
    
    
  }

}
