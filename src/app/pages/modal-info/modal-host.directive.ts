import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModalHost]'
})
export class ModalHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { console.log('hila que hace');
  }

}
