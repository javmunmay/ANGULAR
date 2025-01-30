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

  constructor(private http:HttpClient) { }

  getOwners(){
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
}
