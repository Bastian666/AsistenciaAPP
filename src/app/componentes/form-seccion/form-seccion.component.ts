import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from 'src/app/modelos/Seccion';

@Component({
  selector: 'app-form-seccion',
  templateUrl: './form-seccion.component.html',
  styleUrls: ['./form-seccion.component.scss']
})
export class FormSeccionComponent {
 @Output() public seccionout = new EventEmitter<Seccion>();

 public nuevaSeccion:Seccion={
  nombreDeSeccion:''
 }

 public cambiarSeccion (evento:Event):void{
  const elemento = evento.target as HTMLInputElement;
  this.nuevaSeccion.nombreDeSeccion = elemento.value;
 }

 public generarClase():void{
  const copia2: Seccion={...this.nuevaSeccion};
  this.seccionout.emit(copia2)
  this.nuevaSeccion.nombreDeSeccion='';
 }
}
