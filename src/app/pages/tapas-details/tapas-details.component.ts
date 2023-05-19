import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-tapas-details',
  templateUrl: './tapas-details.component.html',
  styleUrls: ['./tapas-details.component.css']
})
export class TapasDetailsComponent implements OnInit {

tapaDetails: any = [];

constructor(private apiService: ApiService, private rutaActiva: ActivatedRoute) { }
ngOnInit(): void {
       this.cargarTapa(this.rutaActiva.snapshot.params['id']);
     }

  rate(stars: number): void {
      // Aquí puedes agregar la lógica para guardar la votación en tu sistema
      // Puedes enviar los datos al backend a través de una solicitud HTTP, por ejemplo
      // Y también puedes realizar cualquier otra acción necesaria, como actualizar la interfaz de usuario

      console.log('Votaste con ' + stars + ' estrellas');
    }


  cargarTapa(id : number){
        this.apiService.getTapaById(id).subscribe((result)=>{
          this.tapaDetails = result;
          console.log(result);
        });

  }




}
