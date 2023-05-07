import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email : String | undefined ;
  password : String | undefined;
  
  constructor(private loginService: LoginService, private route: Router) {}


  login(){

    const user = { email: this.email, password: this.password };
    this.loginService.login(user).subscribe((data) => {
    });
    this.route.navigate(['/home']);
    
  }

}
