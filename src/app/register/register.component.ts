import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Perfil } from '../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username : String | undefined;
  password : String | undefined;
  email : String | undefined;
  birthdate: String | undefined;
  name: String | undefined;


    constructor(private apiService: ApiService, private route: Router) {

    }
  ngOnInit(): void {
  }

  register(): void {
      // Comprueba si todos los campos requeridos están completos
      if (
            this.username &&
            this.password &&
            this.email &&
            this.birthdate &&
            this.name
          ){
          const Profile = {
                  username: this.username,
                  password: this.password,
                  mail: this.email,
                  surname: '',
                  name: this.name,
                  birthdate: this.birthdate
                };

                this.apiService.postUser(Profile).subscribe(() => {
                      // Registro exitoso, redirige al componente de inicio de sesión
                      this.route.navigate(['/login']);
                    });

          }

}
}






