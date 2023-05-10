import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-locales-details',
  templateUrl: './locales-details.component.html',
  styleUrls: ['./locales-details.component.css']
})
export class LocalesDetailsComponent implements OnInit {

  localDetails: any = [];

  constructor(private apiService: ApiService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarLocal(this.rutaActiva.snapshot.params['id']);
  }

  cargarLocal(id : number){
    this.apiService.getRestaurantById(id).subscribe((result)=>{
      this.localDetails = result;
      console.log(result);
    });
  
  }

}
