import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Credentials } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  username : String | undefined ;
  password : String | undefined;

  constructor(private apiService: ApiService, private route: Router) {}
  login(){
    
    Credentials.username = this.username;
    Credentials.password = this.password;
    this.apiService.login(Credentials).subscribe((response) => {
      this.route.navigate(['/home']);
    })

  }

}
