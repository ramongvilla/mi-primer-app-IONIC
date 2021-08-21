import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarService {
  entidadForm: FormGroup;

  validacionMensaje = { type: 'required', mensaje: 'El campo es requerido.', campo: '' }





  private clientes$ = new Subject<any>();

  constructor() { }
  mensajeError = [];

  public ValidarFormulario(formulario: FormGroup) {
    
    console.log(formulario.value);
    
    let Validar = [];
    this.mensajeError = Validar;

    Object.keys(formulario.controls).forEach(key => {


      //return this.validacionMensaje;v && (formulario.get(key).dirty)
      if (formulario.get(key).hasError(this.validacionMensaje.type)) {

        console.log('se cumple', key);



        Validar.push({ mensaje: 'El campo es requerido.', campo: key });
        //this.clientes$.next(key);








        //return this.validacionMensaje;
      } else {
        this.validacionMensaje.mensaje = "";
        console.log('no se cumple', key);

      }
    });
    return this.mensajeError;
  }
  getClientes$(): Observable<any> {
    return this.clientes$.asObservable();
  }
}
