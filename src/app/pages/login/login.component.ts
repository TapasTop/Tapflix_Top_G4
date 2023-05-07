import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email : String | undefined ;
  password : String | undefined;

  constructor(private apiService: ApiService, private route: Router) { }


  login(){

    const creds = { email: '', password: '' };
    this.apiService.login(creds).subscribe((response) => {
      this.route.navigate(['/home']);
    })

    
  }

}
