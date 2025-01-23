import { Component } from '@angular/core';
import { PAjaxService } from '../../servicios/p-ajax.service';
import { Persona } from '../../modelos/persona';
import { Router } from '@angular/router';



@Component({
  selector: 'app-listado',
  standalone: false,
  
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

