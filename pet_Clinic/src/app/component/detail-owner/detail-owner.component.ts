import { Component } from '@angular/core';
import { Owner } from '../../models/owner';
import { OwnerService } from '../../service/owner.service';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Pet } from '../../models/pet';


@Component({
  selector: 'app-detail-owner',
  imports: [RouterLink, CommonModule],
  templateUrl: './detail-owner.component.html',
  styleUrl: './detail-owner.component.css'
})
export class DetailOwnerComponent {

  public listaOwner: Owner[] = [];
  //public persona: Persona;
  public owner: Owner = <Owner>{};

  public listapets: Pet[] = [];
  public pet: Pet = <Pet>{};

  id: number = 0;


  constructor(private servicioPAjax: OwnerService, private ruta: Router, private route: ActivatedRoute) {


    
    const params = this.route.snapshot.params;

    this.id = Number(params['id']);

    // Obtener la lista de propietarios (owners)
    this.servicioPAjax.ObtenerOwnerId(this.id).subscribe({
      next: res => {
        console.log("Propietario con id ", res);
        this.owner = res; 
        console.log(this.owner);
      },
      error: error => console.log("Error al obtener propietarios: ", error)
    });


    this.servicioPAjax.getMascota(this.id).subscribe({
      next: res => {
        console.log("Mascota con id ", res);
        this.pet = res; 
        console.log(this.pet);
      },
      error: error => console.log("Error al obtener propietarios: ", error)
    });

   }

  



  ngOnInit() {
    
    
  }







}
