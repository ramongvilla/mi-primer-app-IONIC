import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { ModalInfoPage } from './modal-info.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalHostDirective } from './modal-host.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
 
 
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageModule {}
