import { Component, Input } from '@angular/core';
import { Alumno } from 'src/app/modelos/Alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  @Input() alumno!:Array<Alumno>;

}
