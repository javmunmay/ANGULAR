import { Component } from '@angular/core';
import { PAjaxService } from '../../servicios/p-ajax.service';
import { Persona } from '../../modelos/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  standalone: false,
  
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {

  public listaPer:Persona[] = [];

  constructor(private peticion: PAjaxService, private ruta: Router){
    this.peticion.listar().subscribe(
      daticos =>{
        console.log("Estamos en el constructor", daticos);
        this.listaPer = daticos
    })
  }

  borrarPersona(nombre:string ,id:number){
    if(confirm("Estas seguro de que quieres borrar el usuario: "+ id +"?")){
    this.peticion.borrar(id).subscribe({})
    this.peticion.listar().subscribe({
      next: res => {
        if (Array.isArray(res)) {
          this.listaPer = res;
          
        }else{
          console.error("Error" , res);
        }
      }
    })
  }
    
  }

  irNuevaPersona(){
    //this.ruta.navigate(['personas-add/-1']);
    this.ruta.navigate(['personas-add', -1]);

  }

}