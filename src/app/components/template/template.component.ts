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

  constructor() {
    this.dato = {
    nombre : 'andres',
    apellido : 'Obando',
    email : 'cometaue@gmail.com'
    };

  }

  send(form: NgForm) {
      console.log(form);

      console.log(this.dato);
  }
}
