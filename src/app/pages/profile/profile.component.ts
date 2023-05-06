import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  editarPerfil() {
  // Obtener los elementos correspondientes a los campos del perfil
  var elementoNombre = document.getElementById("nombre");
  var elementoApellido = document.getElementById("apellido");
  var elementoGenero = document.getElementById("genero");

  // Crear nuevos inputs editables y copiar los valores originales
  var inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.value = elementoNombre!.innerHTML;

  var inputApellido = document.createElement("input");
  inputApellido.type = "text";
  inputApellido.value = elementoApellido!.innerHTML;

  var inputGenero = document.createElement("input");
  inputGenero.type = "text";
  inputGenero.value = elementoGenero!.innerHTML;

  // Reemplazar los elementos originales con los nuevos inputs editables
  elementoNombre!.replaceWith(inputNombre);
  elementoApellido!.replaceWith(inputApellido);
  elementoGenero!.replaceWith(inputGenero);
}
}
