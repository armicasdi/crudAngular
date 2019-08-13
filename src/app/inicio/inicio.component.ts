import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
mostrar = true;
frase: any = {
  mensaje: 'Curso CRUD de Angular',
  autor: 'Arturo Castro'
}
  constructor() { }

  ngOnInit() {
  }

}
