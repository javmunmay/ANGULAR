import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from '../modules/owner';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private url = environment.API_URL;

  constructor(private http:HttpClient) { }

  getOwners(){
    let cuerpo = {
      accion: "ListarOwners"
    };
    return this.http.post<Owner[]>(this.url, JSON.stringify(cuerpo));
  }

  aniadirOwner(owner: Owner) {
    let cuerpo = {
      accion: "AnadeOwner",
      owner: owner
    };
    return this.http.post<Owner[]>(this.url, cuerpo);
  }

  obtenerOwnerId(id: number) {
    let cuerpo = {
      accion: "ObtenerOwnerId",
      id: id
    };
    return this.http.post<Owner>(this.url, cuerpo);
  }

  modificarOwner(owner: Owner) {
    let cuerpo = {
      accion: "ModificaOwner",
      owner: owner
    };
    return this.http.post<Owner[]>(this.url, cuerpo);
  }

  borrarOwner(id: number, listado: string = "") {
    let cuerpo = {
      accion: "BorraOwner",
      id: id,
      listado: listado
    };
    return this.http.post<Owner[]>(this.url, cuerpo);
  }
}
