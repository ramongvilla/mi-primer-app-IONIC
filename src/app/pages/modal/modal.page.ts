import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormularioEntidadComponent } from 'src/app/components/formulario-entidad/formulario-entidad.component';
import { FormularioContactoComponent } from 'src/app/components/formulario.contacto/formulario.contacto.component';
import { FormularioEmpresaComponent } from 'src/app/components/formulario.empresa/formulario.empresa.component';
import { FormularioUsuarioComponent } from 'src/app/components/formulario.usuario/formulario.usuario.component';
import { ModalService } from 'src/app/services/modal.service';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalService: ModalService) { }

  ngOnInit() {
  }

  tabs = [
    {
      title: 'Entidad',
      component: FormularioEntidadComponent
    },
    {
      title: 'Usuario',
      component: FormularioUsuarioComponent
    },
    {
      title: 'Contacto',
      component: FormularioContactoComponent
    },
    {
      title: 'Empresa',
      component: FormularioEmpresaComponent
    }
  ]


  changeTab(pos){
    console.log(pos);
    this.modalService.abrirModal(pos,this.tabs)
  }


 
}
