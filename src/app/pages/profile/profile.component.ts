import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ApiService } from 'src/app/service/api.service';
import { Perfil } from '../../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  product!: Perfil;

  ngOnInit(): void {
    this.apiService.getPerfil().subscribe((response) => {
      this.product = response;
    })
  }

  }


  // perfildata
  //perfilData() {
  //  this.service.perfilApiData().subscribe((result) => {
  //    console.log(result, 'perfilresult#');
  //    this.perfilResult = result.results;
  //  });
  //}
