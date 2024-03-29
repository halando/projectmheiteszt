import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginModel:any={}

  constructor(private auth:AuthService){}
  
  login(){
      this.auth.login(this.loginModel)
  }
}
