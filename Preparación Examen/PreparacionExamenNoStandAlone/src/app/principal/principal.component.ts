
import { Component } from '@angular/core';
import { FacturaService } from '../servicio/factura.service';
import { Factura } from '../modelos/factura';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: false,
  
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
