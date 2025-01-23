import { Component } from '@angular/core';
import { Persona } from '../modelos/persona';
import { ActivatedRoute, Route } from '@angular/router';
import { PAjaxService } from '../servicios/p-ajax.service';

@Component({
  selector: 'app-form-persona',
  standalone: false,
  
  templateUrl: './form-persona.component.html',
  styleUrl: './form-persona.component.css'
})

export class FormPersonaComponent {
  
  public persona: Persona = <Persona>{};

  public textoBoton:string="";

  //, private ruta: Route, private activeRoute: ActivatedRoute
  constructor(private servicioPAjax: PAjaxService){

    this.persona={
      id:-1,
      dni: "",
      nombre: "",
      apellidos: ""
    }
    this.textoBoton="Añadir";
  }



  /*enviar(persona){
    
  }*/
}
