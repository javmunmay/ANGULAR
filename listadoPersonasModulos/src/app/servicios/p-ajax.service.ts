import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})

export class PAjaxService {

  private url: string = "http://localhost/CLASE/ANGULAR/listaPersonas/servidor.php";

  //Casa: http://localhost/CLASE/ANGULAR/listaPersonas/servidor.php
  //Clase: http://localhost/curso/ANGULAR/listaPersonas/servidor.php


  constructor(private http:HttpClient) { }

  listarPersonas() {
    let cuerpo = JSON.stringify({
      servicio: "listar"
    });
    return this.http.post<Persona[]>(this.url, cuerpo);
    //Persona[] al poner esto te va a dar un array de personas y 
    //si no lo pongo esta mal y no me va a dar un array
  }

  /*listarPersonas() {
    let pa = JSON.stringify({
      servicio: "listar"
    })
    return this.http.post<Persona[]>(this.url, pa);
  }*/

  /*Metodo borrar*/

  eliminarPersonaService(id: number) {
    let cuerpo = {
      servicio: "borrar",
      id: id
    };
    console.log("Persona eliminada con ID:", id);
    return this.http.post<Persona[]>(this.url, cuerpo);
  }


}
