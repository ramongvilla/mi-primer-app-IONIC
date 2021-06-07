import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  pagina:string = "/history"
  constructor(private authSvc: AuthService) { }

  //
  goHistory() {// apilar
  this.authSvc.apilar(this.pagina);  
     
}

  ngOnInit() {
  }

}
