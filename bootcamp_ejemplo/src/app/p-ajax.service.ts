import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PAjaxService {

  private url: string = "http://localhost/CLASE/ANGULAR/PetClinic/petclinic/servicios.php";

  constructor(private http: HttpClient) { }

  getOwners() {
    let cuerpo = {
      accion: "ListarOwners"
    };
    console.log("Owners listados");
    return this.http.post(this.url, cuerpo);
  }

  // Método para añadir 
  addOwner(owner: any) {
    let cuerpo = {
      accion: "AnadeOwner",
      owner: owner
    };
    console.log("Propietario añadido", owner);
    return this.http.post(this.url, cuerpo);
  }

  // Método para modificar 
  updateOwner(owner: any) {
    let cuerpo = {
      accion: "ModificaOwner",
      owner: owner
    };
    console.log("Propietario actualizado", owner);
    return this.http.post(this.url, cuerpo);
  }

  // Método para elimina por ID
  deleteOwner(id: number) {
    let cuerpo = {
      accion: "BorraOwner",
      id: id
    };
    console.log("Propietario eliminado con ID:", id);
    return this.http.post(this.url, cuerpo);
  }

}
