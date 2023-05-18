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

  rate(stars: number): void {
    // Aquí puedes agregar la lógica para guardar la votación en tu sistema
    // Puedes enviar los datos al backend a través de una solicitud HTTP, por ejemplo
    // Y también puedes realizar cualquier otra acción necesaria, como actualizar la interfaz de usuario

    console.log('Votaste con ' + stars + ' estrellas');
  }

  cargarLocal(id : number){
    this.apiService.getRestaurantById(id).subscribe((result)=>{
      this.localDetails = result;
      console.log(result);
    });

  }

}
