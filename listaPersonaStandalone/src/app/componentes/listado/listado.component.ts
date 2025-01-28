import { Component } from '@angular/core';
import { Persona } from '../../modelos/persona';
import { PAjaxService } from '../../servicios/pajax.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listado',
  imports: [RouterLink, CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})


export class ListadoComponent {
  public listaPer:Persona[] = [];

  constructor(private peticion: PAjaxService, private ruta: Router) {
    this.peticion.listarPersonas().subscribe(datos => {
      console.log("Estamos en el constructor", datos);
      this.listaPer = datos;
    })
  }
  

  
  
  eliminarPersona(id: number) {
    if (confirm('¿Estás seguro de eliminar esta Persona?')) {
      this.peticion.eliminarPersonaService(id).subscribe({
        next: res => {
          console.log('Propietario eliminado:', res);
          this.listaPer = res;

          },
        error: err => console.error('Error al eliminar propietario:', err)
      });
    }
  }


  iraNuevaPersona(){
    this.ruta.navigate(['personas-add', -1])
  }


  
}
