import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../modelos/persona'; 

@Injectable({
  providedIn: 'root'
})
export class PAjaxService {
  
  private url: string = "http://localhost/clase/Cliente/Tema%204/archivosListaPersona/servidor.php";
  //private url: string = "http://localhost/clase/Cliente/Tema%204/archivosListaPersona/servidor.php";

  constructor(private http: HttpClient){}

  listar(){
    let pa = JSON.stringify({
      servicio: "listar"
    });
    return this.http.post<Persona[]>(this.url, pa);
  }

  borrar(id: number){
    let borrar = JSON.stringify({
      servicio: "borrar",
      id: id
    });
    return this.http.post<Persona[]>(this.url, borrar);
  }
  
  anade(persona: Persona){
    //Clonamos el objeto
    let anade = JSON.parse(JSON.stringify(persona));

    anade.servicio="insertar";
    console.log("anade: ", anade)
    return this.http.post<Persona[]>(this.url, JSON.stringify(anade));
  }

  selPersonaId(id: number){
   let seleccionar = JSON.stringify({
    servicio: "selPersonaID",
    id: id
   });
   return this.http.post<Persona>(this.url, seleccionar);

  }

  modificar(persona: Persona){
    let modificar = JSON.parse(JSON.stringify(persona));
    modificar.servicio = "modificar";
    console.log("modificar",modificar);
    return this.http.post<Persona[]>(this.url, JSON.stringify(modificar));

  }

}