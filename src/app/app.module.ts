import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSeccionComponent } from './componentes/form-seccion/form-seccion.component';
import { FormAlumnoComponent } from './componentes/form-alumno/form-alumno.component';
import { ListaHistorialComponent } from './componentes/lista-historial/lista-historial.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSeccionComponent,
    FormAlumnoComponent,
    ListaHistorialComponent,
    ListaAlumnosComponent,
    HistorialComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
