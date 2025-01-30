import { Component } from '@angular/core';
import { OwnerService } from '../../service/owner.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-owners',
  imports: [RouterLink, CommonModule],
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css'
})
export class OwnersComponent {
  propietario: any[] = [];
  personas: any[] = [];

  constructor(private servicioPAjax: OwnerService, private ruta:Router) {}

  ngOnInit() {
    // Obtener la lista de propietarios (owners)
    this.servicioPAjax.getOwners().subscribe({
      next: res => {
        console.log("Propietarios recibidos: ", res);
        this.propietario = res as any[];
      },
      error: error => console.log("Error al obtener propietarios: ", error)
    });


    /*
    // Obtener la lista de personas
    this.servicioPAjax.getPersonas().subscribe({
      next: res => {
        console.log("Personas recibidas: ", res);
        this.personas = res as any[];
      },
      error: error => console.log("Error al obtener personas: ", error)
    });
    */
  }

  iraNuevoOwner(){
    this.ruta.navigate(['personas-add', -1])
  }
}
