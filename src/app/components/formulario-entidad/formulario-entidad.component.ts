import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ValidarService } from 'src/app/services/validar.service';

@Component({
  selector: 'app-formulario-entidad',
  templateUrl: './formulario-entidad.component.html',
  styleUrls: ['./formulario-entidad.component.scss'],
})
export class FormularioEntidadComponent implements OnInit {

  entidadForm: FormGroup;

  clientes$: Observable<any>;

  constructor(private fb: FormBuilder, public validarService: ValidarService) {
    this.entidadForm = this.fb.group({
      nombre: ['', Validators.required],

      campos: this.fb.array([this.fb.group({
        nombre: ['', Validators.required],
        valor: ['', Validators.required],
      })]),
      

      picture: ['', Validators.required],
      estatus: ['', Validators.required],
      owner: ['', Validators.required],


    });
  }

  ngOnInit() { }

  mensajeError;


  get campos(){
    return this.entidadForm.controls["campos"] as FormArray;
  }

  guardarEntidad() {
    this.mensajeError = this.validarService.ValidarFormulario(this.entidadForm);
    // this.error = this.validarService.validacionMensaje.mensaje;
    //this.campo=this.validarService.validacionMensaje.campo;
    console.log('este', this.mensajeError);

    /*
        this.clientes$ = this.validarService.getClientes$();
        this.clientes$.subscribe(data=>{
          this.campo = data;
          console.log('datasssssss',this.campo)
        })
    */
   
  }

}
