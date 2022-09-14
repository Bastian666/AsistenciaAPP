import { Component, Input } from '@angular/core';
import { Seccion } from 'src/app/modelos/Seccion';
import { Alumno } from 'src/app/modelos/Alumno';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {
 @Input() public seccion!:Seccion;
 @Input() public alumno!:Alumno;
 fecha=Date.now();

}
