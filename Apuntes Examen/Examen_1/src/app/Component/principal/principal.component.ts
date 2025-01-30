import { Component } from '@angular/core';
import { Factura } from '../../modelos/factura';
import { Router } from '@angular/router';
import { FacturaService } from '../../servicio/factura.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  imports: [RouterLink, CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  public listaFactura: Factura[] = [];

  constructor(private peticion: FacturaService, private ruta: Router) {
    this.peticion.listarFacturas().subscribe(datos => {
      console.log("Estamos en el constructor", datos);
      this.listaFactura = datos;
    })
  }
}
