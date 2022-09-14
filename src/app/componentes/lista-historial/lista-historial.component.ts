import { Component, Input } from '@angular/core';
import { Alumno } from 'src/app/modelos/Alumno';
import { Seccion } from 'src/app/modelos/Seccion';

@Component({
  selector: 'app-lista-historial',
  templateUrl: './lista-historial.component.html',
  styleUrls: ['./lista-historial.component.scss']
})
export class ListaHistorialComponent {
  @Input() seccion!:Array<Seccion>;
  @Input() alumno!:Array<Alumno>;
}
