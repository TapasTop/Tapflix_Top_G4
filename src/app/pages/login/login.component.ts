import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email : String | undefined ;
  password : String | undefined;
  
  constructor() { }


  login(){
    console.log("logeado");
  }

}
