import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title,Meta } from '@angular/platform-browser';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  locales : any = [];
  misDegustaciones: any = [];
  degustacionesFavs: any = [];

  constructor(private service: MovieApiServiceService,private title:Title, private apiService: ApiService) {
    this.title.setTitle('Home - TapasTop');


   }

  bannerResult: any = [];




  ngOnInit(): void {


    this.cargarLocales();
    this.cargarDegustaciones();
    this.cargarDegustacionesFavs();
  }


  cargarLocales(){
    this.apiService.getAllRestaurants().subscribe((result)=> {
      this.locales = result;
    });
  }
  cargarDegustaciones(){
    this.apiService.getTapasByUser("padrura").subscribe((result)=>{
        this.misDegustaciones = result;
        console.log(this.misDegustaciones);
    });
  }

  cargarDegustacionesFavs(){
    this.apiService.getTapaByTaste("SALTY").subscribe((result)=>{
      this.degustacionesFavs = result;
      console.log(this.degustacionesFavs);
    });
  }
  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerResult = result.results;
    });
  }


  showOverlay: boolean = false;

  openOverlay() {
    this.showOverlay = true;
  }

  closeOverlay() {
    this.showOverlay = false;
  }

  // action

}
