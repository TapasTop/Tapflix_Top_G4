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
}
