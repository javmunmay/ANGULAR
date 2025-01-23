import { Component } from '@angular/core';
import { Componente2Component } from "../componente2/componente2.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public miAtributo:string = "ESTE ES EL CONTENIDO DEL ATRIBUTO";

  public miObjeto = {
    nombre: "Javier",
    apellido: "Muñoz"
  }

  public miArray:string[] = ["Hola", "Mundo", "Angular"];

  constructor(){
    console.log('Home Component constructor');
  }
}
