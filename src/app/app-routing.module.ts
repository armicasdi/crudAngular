import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProyectosComponent} from './proyectos/proyectos.component'
import { InicioComponent } from './inicio/inicio.component';
import { DeseosComponent } from './deseos/deseos.component';
import {DetailsComponent } from './details/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent} ,
  { path: 'proyectos', component: ProyectosComponent },
  {path: 'deseos', component: DeseosComponent},
  {path: 'details/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
