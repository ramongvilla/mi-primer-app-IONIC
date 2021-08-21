import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../pages/modal-info/modal-info.page';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalCtrl: ModalController) { }

  async abrirModal(pos, component) {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps:{
        entidad: component[pos].title, 
        component: component[pos].component,
      }
    });
    await modal.present();
  }
}
