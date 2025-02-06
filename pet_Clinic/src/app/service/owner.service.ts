import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Owner } from '../models/owner';
import { Pet } from '../models/pet';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private url = environment.API_URL;

  //Casa: 
  //Clase: http://localhost/curso/ANGULAR/PetClinic/servicios.php

  constructor(private http: HttpClient) { }

  getOwners() {
    let cuerpo = {
      accion: "ListarOwners"
    };
    return this.http.post<Owner[]>(this.url, cuerpo);
  }

  /*
  getPersonas() {
    let cuerpo = {
      servicio: "listar"
    };
    return this.http.post(this.url, cuerpo);
  }*/



  editarServicio(id: number, persona: Owner) {
    const cuerpo = {
      servicio: "modificaOwner",
      id: id,
      first_name: persona.first_name,
      last_name: persona.last_name,
      address: persona.address,
      city: persona.city,
      telephone: persona.telephone,
    };
    return this.http.post<Owner>(this.url, cuerpo);
  }

}
