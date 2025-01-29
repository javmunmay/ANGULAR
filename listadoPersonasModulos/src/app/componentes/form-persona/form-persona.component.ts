import { Component } from '@angular/core';
import { Persona } from '../../modelos/persona';
import { Router, ActivatedRoute } from '@angular/router';
import { PAjaxService } from '../../servicios/p-ajax.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-form-persona',
  standalone: false,

  templateUrl: './form-persona.component.html',
  styleUrl: './form-persona.component.css'
})
export class FormPersonaComponent {
  public listaPer: Persona[] = [];
  //public persona: Persona;
  public persona: Persona = <Persona>{};
  public textoBoton: string;
  public modoEdicion: boolean = false;
  
  

  constructor(
    private peticion: PAjaxService, 
    private ruta: Router, 
    private activateroute: ActivatedRoute
    ) {

    this.persona = {
      id: -1,
      dni: "",
      nombre: "",
      apellidos: ""
    }
    this.textoBoton = "Añadir";
  }
  
  onSubmit(form: Persona) {

       
    console.log("form: ", form);
    console.log("this.persona: ", this.persona);

    console.log(" Persona: ", this.persona, " en proceso de ser añadida o modificada. ");

    if(this.modoEdicion){


      this.peticion.editarServicio(this.persona.id, form).subscribe({
        next: res => {
          console.log('Persona actualizada:', res);
  
          this.persona = res;
          this.ruta.navigate(["/"]);
  
        },
        error: err => console.error('Error al actualizar persona:', err)
      });


    }else{

      this.peticion.anadir(form).subscribe({
        next: form => {
          console.log('Persona Insertada:', form);
  
          this.ruta.navigate(["/"]);
  
        },
        error: err => console.error('Error al insertar persona:', err)
      });

    }

      

    

    

    
  }

  ngOnInit(){
    const personaId = this.activateroute.snapshot.params["id"];
    console.log("id = "+personaId);

    if(personaId != -1) {
      this.textoBoton = "Modificar";
      this.modoEdicion = true;
      
      this.peticion.selPersonaID(personaId).subscribe({
        next: res => {
          console.log('Persona seleccionada en .ts:', personaId);
          console.log('Informacion res:', res);
          this.persona = res;
        },
        error: err => console.error('Error al seleccionar persona:', err)
      });
      

    }else{
      this.textoBoton = "Añadir";
      
    }


    
    
  }



}
