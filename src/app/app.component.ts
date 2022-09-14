import { Component } from '@angular/core';
import { Alumno } from './modelos/Alumno';
import { Seccion } from './modelos/Seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AsistenciaAPP';

  public listarAlumno:Array<Alumno>=[

  ];

  public listarSeccion:Array<Seccion>=[

  ];

  public registraAlumno (nuevo:Alumno):void{
    this.listarAlumno.push(nuevo);
  }
  public registraSeccion (nuevo:Seccion):void{
    this.listarSeccion.push(nuevo);
  }
}
