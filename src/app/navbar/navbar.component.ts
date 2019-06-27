import { Component, OnInit } from '@angular/core';
import { Rutas } from './rutas';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor() { }
  ruta:string[];
  
  ngOnInit() {
    this.ruta = ["inicio" , "proyectos"]
     
  }
  

}
