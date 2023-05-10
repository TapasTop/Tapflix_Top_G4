import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Credentials, Perfil } from '../models';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPerfil(): Observable<Perfil> {
    const headers = { 'Authorization' : 'Bearer'+ this.getToken() };
    return this.http.get<Perfil>("https://tapastop-tapastop-rest.azuremicroservices.io/user/1", {headers});
  }

  login(creds: Credentials) {
    return this.http.post("https://tapastop-tapastop-rest.azuremicroservices.io/login", creds, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken?.replace('Bearer ', '');

      localStorage.setItem('token', token);
      return body;
    }))
  }
  getToken() {
    return localStorage.getItem('token');
  }

  getAllRestaurants(): Observable <any>{
    return this.http.get("https://tapastop-tapastop-rest.azuremicroservices.io/api/restaurant");
  }

  getRestaurantById(id : number) : Observable <any>{
    return this.http.get("https://tapastop-tapastop-rest.azuremicroservices.io/api/restaurant/"+id);
  }

  postRestaurant(restaurantRequest: any ): Observable<any>{
    return this.http.post("https://tapastop-tapastop-rest.azuremicroservices.io/api/restaurant",restaurantRequest);
  }

  deleteRestaurant(id: number): Observable<any>{
    return this.http.delete("https://tapastop-tapastop-rest.azuremicroservices.io/api/restaurant/${id}");
  }

  getAllTapas(): Observable<any>{
    return this.http.get("https://tapastop-tapastop-rest.azuremicroservices.io/api/tapa");
  }

  getTapaById(id: number): Observable <any>{
    return this.http.get("https://tapastop-tapastop-rest.azuremicroservices.io/api/tapa/${id}");
  }

  postTapa(TapaRequest: any): Observable<any>{
    return this.http.post("https://tapastop-tapastop-rest.azuremicroservices.io/api/tapa",TapaRequest);
  }

  deleteTapa(id: number): Observable<any>{
    return this.http.delete("https://tapastop-tapastop-rest.azuremicroservices.io/api/tapa/${id}");
  }

  getTapaByTaste(taste: String): Observable<any>{
    return this.http.get("https://tapastop-tapastop-rest.azuremicroservices.io/api/tapa/taste/${taste}");
  }

  getTapasByUser(username: String): Observable<any>{
    return this.http.get("https://tapastop-tapastop-rest.azuremicroservices.io/api/tapa/rated/" + username);
  }

  getAllUsers(): Observable<any>{
    return this.http.get("https://tapastop-tapastop-rest.azuremicroservices.io/api/user");
  }

  getUserById(id: number): Observable<any>{
    return this.http.get("https://tapastop-tapastop-rest.azuremicroservices.io/api/user/${id}");
  }

  postUser(userRequest: any): Observable<any>{
    return this.http.post("https://tapastop-tapastop-rest.azuremicroservices.io/api/signup",userRequest);
  }

  deleteUser(id: number): Observable<any>{
    return this.http.delete("https://tapastop-tapastop-rest.azuremicroservices.io/api/user/${id}");
  }

  confirmToken(token: any): Observable<any>{
    return this.http.get("https://tapastop-tapastop-rest.azuremicroservices.io/confirm-account?token=${token}");
  }

  getMailByUser(mail: String): Observable<any>{
    return this.http.get("https://tapastop-tapastop-rest.azuremicroservices.io/api/user/mail/${mail}");
  }
}
