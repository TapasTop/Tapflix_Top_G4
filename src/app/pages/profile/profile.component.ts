import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }
  product: any;

  ngOnInit(): void {
      //const headers = {
      //  'Authorization': 'Basic YWRtaW4xOjEyMzQ='
      //}
    this.http.get<any>('https://tapastop-tapastop-rest.azuremicroservices.io/user/3')
      .subscribe(data => this.product = data);
  }
  }


  // perfildata
  //perfilData() {
  //  this.service.perfilApiData().subscribe((result) => {
  //    console.log(result, 'perfilresult#');
  //    this.perfilResult = result.results;
  //  });
  //}
