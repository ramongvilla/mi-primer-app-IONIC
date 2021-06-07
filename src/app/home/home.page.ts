import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

import { ProfilePage } from "../profile/profile.page";
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user:string;
  mail:string;
  navPagina=[];
  pagina:string = "/profile"
  constructor(private authSvc: AuthService) {
    

 }

//pagina:string = "/profile"
 goProfile() {// apilar
  this.authSvc.apilar(this.pagina);  
     
}


  logout() {
    this.authSvc.logout();
  }

  ngOnInit() {
  }

}
