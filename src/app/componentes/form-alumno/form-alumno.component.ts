import { Component, Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/modelos/Alumno';
import { Seccion } from 'src/app/modelos/Seccion';


@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.scss']
})
export class FormAlumnoComponent {
  @Output() public alumnoout = new EventEmitter<Alumno>();

  public nuevaSeccion:Seccion={
    nombreDeSeccion:''
   }

  public nuevoAlumno: Alumno = {
    rut: 0,
    nombre: '',
    apellido: '',
    edad:0,
    seccion:''
  }

  public cambiarRut(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.rut = Number.parseInt(elemento.value) || 0;
  }

  public cambiarNombre(evento:Event):void{
    const variable = evento.target as HTMLInputElement;
    this.nuevoAlumno.nombre = variable.value;
  }

  public cambiarApellido(evento:Event):void{
    const variable = evento.target as HTMLInputElement;
    this.nuevoAlumno.apellido = variable.value;
  }

  public cambiarEdad(evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevoAlumno.edad = Number.parseInt(elemento.value) || 0;
  }
  public cambiarSeccion (evento:Event):void{
    const elemento = evento.target as HTMLInputElement;
    this.nuevaSeccion.nombreDeSeccion = elemento.value;
   }

  public guardarElemento():void{
    const copia: Alumno = {
      ...this.nuevoAlumno
    };
    this.alumnoout.emit(copia);
    this.nuevoAlumno.rut=0;
    this.nuevoAlumno.nombre='';
    this.nuevoAlumno.apellido='';
    this.nuevoAlumno.edad=0;
  }
}
