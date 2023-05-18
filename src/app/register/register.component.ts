import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Perfil } from '../models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username : String | undefined;
  password : String | undefined;
  email : String | undefined;
  birthdate: string | undefined;
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
              const today = new Date();
              const birthdate = new Date(this.birthdate.toString());
              const age = today.getFullYear() - birthdate.getFullYear();

              if (age < 18) {
                console.log('Error: La edad debe ser mayor o igual a 18');
                return;
              }
          const Profile = {
                  username: this.username,
                  password: this.password,
                  mail: this.email,
                  surname: '',
                  name: this.name,
                  birthdate: this.birthdate
                };



                this.apiService.postUser(Profile).subscribe(
                  () => {
                    // Registro exitoso, redirige al componente de inicio de sesión
                    this.route.navigate(['/login']);
                  },
                  (error: HttpErrorResponse) => {
                    if (error.status === 401) {
                    this.route.navigate(['/login']);
                      // Error 400: solicitud incorrecta
                      // Aquí puedes mostrar un mensaje de error específico o realizar otras acciones según tus necesidades
                      console.log('Error 400: Solicitud incorrecta hola');
                    } else {
                      // Otro tipo de error
                      const errorContainer = document.getElementById('error-container') || undefined;
                      if (errorContainer) {
                        errorContainer.textContent = 'Error:' + error.error.message;
                      }
                      console.log('Error en la solicitud:', error.error);

                    }
                  }
                );

          }

}
}






