import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { DeseosComponent } from './deseos/deseos.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import { AngularFirestore } from 'angularfire2/firestore';
import { DetailsComponent } from './deseos/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ProyectosComponent,
    DeseosComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
