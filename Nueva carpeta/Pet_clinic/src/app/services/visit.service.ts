import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Visit } from '../modules/visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService {

  private url = environment.API_URL;
  
    constructor(private http:HttpClient) { }

    listarVisitsIdPet(idPet: number) {
      let cuerpo = {
        accion: "ListarVisitasPet",
        id: idPet
      };
      return this.http.post<Visit[]>(this.url, cuerpo);
    }
}
