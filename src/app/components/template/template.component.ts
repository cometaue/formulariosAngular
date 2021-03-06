import { Component } from '@angular/core';
import { DatosUsuario } from './template.interface';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent  {
  dato: DatosUsuario;
  paises: string[];
  sexos: string[];
  constructor() {
    this.paises = ['Ecuador', 'España', 'Venezuela'];
    this.dato = {
    nombre : '',
    apellido : '',
    email : '',
    pais : '',
    sexo: '',
    terminos: false
    };
    this.sexos = ['Hombre', 'Mujer', 'Sin Definir'];

  }

  send(form: NgForm) {
      console.log(form);

      console.log(this.dato);
  }
}
