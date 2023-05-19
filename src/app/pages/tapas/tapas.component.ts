import { Component, OnInit } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-tapas',
  templateUrl: './tapas.component.html',
  styleUrls: ['./tapas.component.css']
})
export class TapasComponent implements OnInit {

  constructor(private apiService: ApiService) {

     }

  tapas: any = [];

  ngOnInit(): void {
    this.cargarTapas();
  }



  cargarTapas(){
      this.apiService.getAllTapas().subscribe((result)=> {
        this.tapas = result;
      });
    }

}
