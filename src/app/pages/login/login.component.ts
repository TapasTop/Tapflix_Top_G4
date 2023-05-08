import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Credentials } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  username : String | undefined;
  password : String | undefined; 

  constructor(private apiService: ApiService, private route: Router) {

  }
  login(){
    const creds: Credentials = { username : this.username, password : this.password};
    console.log(creds);
    this.apiService.login(creds).subscribe((response) => {
     
      this.route.navigate(['/home']);
    })

  }

}
