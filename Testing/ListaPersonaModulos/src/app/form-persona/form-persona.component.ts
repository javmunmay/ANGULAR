import { Component } from '@angular/core';
import { Persona } from '../modelos/persona';
import { HttpClient } from '@angular/common/http';
import { PAjaxService } from '../servicios/p-ajax.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-persona',
  standalone: false,
  
  templateUrl: './form-persona.component.html',
  styleUrl: './form-persona.component.css'
})
export class FormPersonaComponent {
  public persona: Persona = <Persona>{};



  public textoBoton: string;

  constructor(private peticion: PAjaxService, 
    private ruta: Router,
    private route: ActivatedRoute){
      this.persona.ID = -1;
      this.textoBoton = "AÑADIR";

      
    }

    onSubmit(form: Persona) {
      console.log("form: " , form);
      console.log("this.persona: " , this.persona);

      if(this.persona.ID == -1){
      this.peticion.anade(form).subscribe({
        next: (datos) => {
          this.ruta.navigate(['/']);
        },
        error: (error) =>{ 
          console.log('Error: ', error); 
        }
      })
    }else {
      console.log("Datos enviados para modificación: ", form);
      this.peticion.modificar(form).subscribe({
        next: (datos) =>{
          console.log("Respuesta del backend (modificar):", datos);
          this.ruta.navigate(['/']);
        },
        error: (error) =>{
          console.log("Error: " , error); 
          
        }
      })
    }
    } 


    ngOnInit(){
      const personaId = this.route.snapshot.params["id"];
      console.log("id = " +personaId);
      if(personaId == -1){
        this.textoBoton = "Añadir";
      }else{
        this.textoBoton = "Modificar";
        this.peticion.selPersonaId(personaId).subscribe({
          next: res=>{
            this.persona = res;
          },
          error: error => {console.log("Error: " , error)}
        })
      }

    
    }

  
  
    

}