import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {
  formulario: FormGroup;
  usuario =
    {
      nombreCompleto:
      {
        nombre: '',
        apellido: ''
      },
      correo: '',
      // pasatiempos: ['correr', 'dormir', 'jugar']
    };
  constructor() {
    this.formulario = new FormGroup({

      nombreCompleto: new FormGroup({
        nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
        apellido: new FormControl('', [Validators.required, Validators.minLength(3)])
      }),


      correo: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"
        )
      ]),
      pasatiempos: new FormArray([
        new FormControl('', Validators.required)
      ]),
      username: new FormControl('', Validators.required, this.existeUsuario),
      password1: new FormControl('', [Validators.required, Validators.pattern(' [a-zA-Z0-9] ')]),
      password2: new FormControl()
    });
    this.formulario.get('password2').setValidators([Validators.required, this.passValue.bind(this.formulario)]);
    // this.formulario.setValue(this.usuario);

    this.formulario.get('username').valueChanges.subscribe(data => {
           console.log(data);
    });

    this.formulario.get('username').statusChanges.subscribe(data => {
           console.log(data);
    });
  }
  addHobby(pasa) {
    (this.formulario.get('pasatiempos') as FormArray).push(new FormControl(pasa));
  }
  send(formulario) {
    console.log(formulario);
    console.log(formulario.value);
    // this.formulario.reset(this.usuario);
  }
  personalValida(control: FormControl): { [s: string]: boolean} {
   if (control.value === 'obando') {
     return {
       noobando: true
     };
   }
   return null;
  }
  passValue(control: FormControl): { [s: string]: boolean} {
    const forma = this;
    if (control.value !== forma['controls'].password1.value ) {
     return {
       diferent_pass: true
     };
   }
    return null;
  }
  existeUsuario(control: FormControl): Promise<any>|Observable<any> {
   let promesa = new Promise( (resolve , reject) => {
    setTimeout(() => {
      if (control.value === 'andres') {
        resolve({existe: true});
      } else {
        resolve(null);
      }
    }, 3000);
   });
   return promesa;
  }
}
