import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authSvc: AuthService) { }

  async onRegister(email, password) {
    try {
      console.log('ya',email);
      const user = await this.authSvc.register(email.value,
        password.value);
        if (user) {
          console.log('user', user);
          
        //chek email
        }
    } catch (error) {

    }

  }

  ngOnInit() {
  }

}
