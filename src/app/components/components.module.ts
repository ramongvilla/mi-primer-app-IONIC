import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FormularioUsuarioComponent } from './formulario.usuario/formulario.usuario.component';
import { FormularioEntidadComponent } from './formulario-entidad/formulario-entidad.component';
import { FormularioContactoComponent } from './formulario.contacto/formulario.contacto.component';
import { FormularioEmpresaComponent } from './formulario.empresa/formulario.empresa.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FormularioUsuarioComponent,
    FormularioEntidadComponent,
    FormularioContactoComponent,
    FormularioEmpresaComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent,
    FormularioUsuarioComponent,
    FormularioEntidadComponent,
    FormularioContactoComponent,
    FormularioEmpresaComponent


  ]
})
export class ComponentsModule { }
