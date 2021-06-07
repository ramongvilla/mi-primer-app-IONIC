import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  async onLogin(email,password){
    try {
      const user = await this.authSvc.login(email.value,
        password.value);
        this.authSvc.PasarAccion(user.email);
        if (user) {
          //const getToken = this.authSvc.getToken(user);
          //console.log('tokeniouytf', getToken.displayName,getToken.email,getToken.uid);
          //localStorage.setItem('auth_token', getToken.uid);
                   
      
        }
    } catch (error) {
      
    }
  }

  async onLoginGoogle(){
    try {
      const user = await this.authSvc.loginGoogle();
      console.log('sds',user.displayName);


      this.authSvc.PasarAccion(user.displayName);


        if (user) {
          const getToken = this.authSvc.getToken(user);
        
          
          
        //chek email
        }
    } catch (error) {
      
    }
  }
}
