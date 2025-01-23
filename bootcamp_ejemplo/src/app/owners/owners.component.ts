import { Component, OnInit } from '@angular/core';
import { PAjaxService } from '../p-ajax.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-owners',
  imports: [CommonModule],
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  owners: any[] = [];

  constructor(private servicioPAjax: PAjaxService) {}

  ngOnInit() {
    this.cargarOwners();
  }

  // Cargar la lista de propietarios
  cargarOwners() {
    this.servicioPAjax.getOwners().subscribe({
      next: res => {
        console.log("Propietarios recibidos: ", res);
        this.owners = res as any[];
      },
      error: error => console.log("Error al obtener propietarios: ", error)
    });
  }

  // Método para añadir un nuevo propietario
  nuevoOwner() {
    const nuevoOwner = {
      firstName: 'Nuevo',
      lastName: 'Propietario',
      address: 'Nueva Dirección',
      city: 'Nueva Ciudad',
      telephone: '987654321'
    };

    console.log("método nuevo propietario iniciado con éxito");

    this.servicioPAjax.addOwner(nuevoOwner).subscribe({
      next: res => {
        console.log('Propietario añadido:', res);
        this.cargarOwners();  // Recargar la lista
      },
      error: err => console.error('Error al añadir propietario:', err)
    });
  }

  // Método para modificar un propietario
  editarOwner(owner: any) {
    const propietarioActualizado = {
      ...owner,
      firstName: 'Nombre Actualizado'
    };

    console.log("método editar propietario iniciado con éxito");

    this.servicioPAjax.updateOwner(propietarioActualizado).subscribe({
      next: res => {
        console.log('Propietario actualizado:', res);
        this.cargarOwners();  // Recargar la lista
      },
      error: err => console.error('Error al actualizar propietario:', err)
    });
  }

  // Método para eliminar un propietario por ID
  eliminarOwner(id: number) {
    if (confirm('¿Estás seguro de eliminar este propietario?')) {
      this.servicioPAjax.deleteOwner(id).subscribe({
        next: res => {
          console.log('Propietario eliminado:', res);
          // Filtrar el propietario eliminado sin recargar la página
          this.owners = this.owners.filter(owner => owner.id !== id);
        },
        error: err => console.error('Error al eliminar propietario:', err)
      });
    }
  }
}
