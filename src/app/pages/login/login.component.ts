import { Component} from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  username : String | undefined ;
  password : String | undefined;

  constructor(private apiService: ApiService) {}
  login(){
    const user = { email: this.username, password: this.password };
    
      console.log(user);

  }

}
