import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProyectosComponent} from './proyectos/proyectos.component'
import { InicioComponent } from './inicio/inicio.component';
import { DeseosComponent } from './deseos/deseos.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent} ,
  { path: 'proyectos', component: ProyectosComponent },
  {path: 'deseos', component: DeseosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
