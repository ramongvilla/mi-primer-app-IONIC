import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormularioUsuarioComponent } from 'src/app/components/formulario.usuario/formulario.usuario.component';
import { ModalHostDirective } from './modal-host.directive';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  @Input() entidad;
  @Input() component;

  @ViewChild(ModalHostDirective, { static: true }) profileHost: ModalHostDirective;


  @ViewChild('figureContainer', { read: ViewContainerRef }) figureContainer;
  //const viewContainerRef = this.dinamycHost.viewContainerRef;



  constructor(private modalCtrl: ModalController,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {


    // console.log(this.tabs[0].component);
    // const component = this.componentFactoryResolver.resolveComponentFactory(this.tabs[0].component);

  }
  
  
  ngAfterViewInit() {

    
    
    // const component = this.componentFactoryResolver.resolveComponentFactory(this.component);
    
    // //this.profileHost.viewContainerRef.createComponent(component);
    
    // this.figureContainer.createComponent(component)
    
    
  }
  
  ngAfterViewChecked(){
    
  }
  
  
  prueba(){
    
    //const vcr = this.modalHost.viewContainerRef;
    const component = this.componentFactoryResolver.resolveComponentFactory(this.component);
    
    //this.profileHost.viewContainerRef.createComponent(component);

    setTimeout(() => {
      this.figureContainer.createComponent(component)          
  });
    
    
    //const ref = this.viewContainerRef.createComponent(component);
    //vcr.clear();
    //this.dinamycHost.viewContainerRef.clear();+
    //vcr.createComponent(component);
  }
  
  ngOnInit() {
    this.prueba();  
    

  }

  salir() {
    this.modalCtrl.dismiss();
  }

}
