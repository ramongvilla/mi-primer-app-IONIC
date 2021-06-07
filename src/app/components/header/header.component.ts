import { AuthService } from 'src/app/services/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input () titulo:string;
 
  constructor(private authSvc: AuthService) { }

  goBack() {// desapilar
    this.authSvc.desapilar();
      
 }

  ngOnInit() {}

}
