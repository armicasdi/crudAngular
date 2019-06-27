import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
mostrar = true;
frase: any = {
  mensaje: 'Bienvenido al inicio del curso de Angular',
  autor: 'Claudio'
}
  constructor() { }

  ngOnInit() {
  }

}
