import { Component } from '@angular/core';
import { Owner } from '../../models/owner';
import { OwnerService } from '../../service/owner.service';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-owner',
  imports: [FormsModule, RouterLink],
  templateUrl: './form-owner.component.html',
  styleUrl: './form-owner.component.css'
})
export class FormOwnerComponent {

  public listaOwner: Owner[] = [];
  //public persona: Persona;
  public owner: Owner = <Owner>{};
  public textoBoton!: string;
  public modoEdicion: boolean = false;


  constructor(

    private peticion: OwnerService,
    private ruta: Router,
    private activateroute: ActivatedRoute

  ) {

    
    this.owner = {
      id: -1,
      first_name: "",
      last_name: "",
      address: "",
      city: "",
      telephone: "",
      pets: []
    }
    this.textoBoton = "Añadir";
  }


  onSubmit(form: Owner) {}
}






