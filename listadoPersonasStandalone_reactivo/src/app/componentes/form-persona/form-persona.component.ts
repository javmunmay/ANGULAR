import { Component } from '@angular/core';
import { Persona } from '../../modelos/persona';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { PAjaxService } from '../../servicios/pajax.service';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-persona',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './form-persona.component.html',
  styleUrl: './form-persona.component.css'
})
export class FormPersonaComponent {
  public listaPer: Persona[] = [];
  //public persona: Persona;
  public persona: Persona = <Persona>{};
  public textoBoton: string;
  public modoEdicion: boolean = false;


  public form: FormGroup;

  constructor(
    private peticion: PAjaxService,
    private ruta: Router,
    private activateroute: ActivatedRoute,
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      //Declaramos los diferentes campos del formulario
      id: this.fb.control('-1'),
      dni: this.fb.control('', [Validators.required, Validators.minLength(9)]),
      nombre: this.fb.control('', [Validators.required]),
      apellidos: this.fb.control('', [Validators.required])
    });


    this.textoBoton = "Añadir";
  }

  onSubmit() {
    let form = this.form.value;


    console.log("form: ", form);
    console.log("this.persona: ", this.persona);

    console.log(" Persona: ", this.persona, " en proceso de ser añadida o modificada. ");

    if (this.modoEdicion) {


      this.peticion.editarServicio(this.persona.id, form).subscribe({
        next: res => {
          console.log('Persona actualizada:', res);

          this.persona = res;
          this.ruta.navigate(["/"]);

        },
        error: err => console.error('Error al actualizar persona:', err)
      });


    } else {

      this.peticion.anadir(form).subscribe({
        next: form => {
          console.log('Persona Insertada:', form);

          this.ruta.navigate(["/"]);

        },
        error: err => console.error('Error al insertar persona:', err)
      });

    }








  }

  ngOnInit() {
    const personaId = this.activateroute.snapshot.params["id"];
    console.log("id = " + personaId);

    if (personaId != -1) {
      this.textoBoton = "Modificar";
      this.modoEdicion = true;

      this.peticion.selPersonaID(personaId).subscribe({
        next: datos => {
          this.persona = datos;
          this.form.patchValue(this.persona);
        
        },
        error: err => console.error('Error al obtener persona:', err)

      });

    }else {
      this.textoBoton = "Añadir";


  } 

}
}





