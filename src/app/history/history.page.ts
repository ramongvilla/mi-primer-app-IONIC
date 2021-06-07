import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  pagina:string = "/help"
  constructor(private authSvc: AuthService) { }
  goHelp() {// apilar
    this.authSvc.apilar(this.pagina);  
       
  }

  ngOnInit() {
  }

}
