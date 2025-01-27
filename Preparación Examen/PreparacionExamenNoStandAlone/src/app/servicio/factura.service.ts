import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Factura } from '../modelos/factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private url: string = "http://localhost/CLASE/ANGULAR%20GIT/ANGULAR/Preparaci%c3%b3n%20Examen/Para_Alumnado/servidor.php";


  constructor(private http: HttpClient) { }


  listarFacturas() {
    let cuerpo = JSON.stringify({
      servicio: "facturas"
    });
    return this.http.post<Factura[]>(this.url, cuerpo);
    //Persona[] al poner esto te va a dar un array de personas y 
    //si no lo pongo esta mal y no me va a dar un array
  }

  detalleFactura(id: number) {
    let cuerpo = JSON.stringify({
      servicio: "detalle",
      id: id
    });
    return this.http.post<Factura[]>(this.url, cuerpo);
    //Persona[] al poner esto te va a dar un array de personas y 
    //si no lo pongo esta mal y no me va a dar un array
  }

  
  añadirDetalleFactura(detalle: any) {
    let cuerpo = JSON.stringify({
      servicio: "anade"
    });
    return this.http.post<Factura[]>(this.url, cuerpo);
  }

  cargarDetallesFactura(id: number) {
    let cuerpo = JSON.stringify({
      servicio: "detalle",
      id: id
    });
    return this.http.post<Factura[]>(this.url, cuerpo);
    //Persona[] al poner esto te va a dar un array de personas y 
    //si no lo pongo esta mal y no me va a dar un array
  }
}
