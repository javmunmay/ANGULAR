import { Component } from '@angular/core';

@Component({
  selector: 'app-g-hobbit',
  standalone: false,
  
  templateUrl: './g-hobbit.component.html',
  styleUrl: './g-hobbit.component.css'
})
export class GHobbitComponent {

  public lista:string[] = [];
  public gHobbit:string = "";
  public gHobbitMod:string = "";

  //Objeto
  public accion:{id:number, nombre:string, indice:number};
  public idEdit: number = -1;

  constructor(){
    this.lista=["Javier", "Simon", "Leandro", "Rocio"];
    this.gHobbit="";
    this.gHobbitMod="";
    this.accion={id:1, nombre:"Añadir", indice: -1};
  }

  eliminar(hobbit:string, i:number){
    console.log("Hobbit: ", hobbit," id: ",i);
    if(confirm("¿Estás seguro que quieres eliminar a "+hobbit+" ?")){
      this.lista.splice(i,1);
    }
    
  }

  anade(){
    console.log("Hobbit añadido: "+this.gHobbit);
    const nuevoHobbit = this.gHobbit;
    //this.lista.push(nuevoHobbit);
    
    if (this.gHobbit.trim() == "") {
      alert("No ha introducido ningun valor");    
    } else{
      this.lista.unshift(nuevoHobbit);
    }
    
  }


  editar(hobbit:string, i:number){
    console.log("Hobbit posicionado: "+this.gHobbit+ " id: ",i);

      this.gHobbitMod = hobbit;
      this.idEdit=i;
    
  }

  modificar(gHobbitMod:string){
    console.log("Hobbit editado: "+this.gHobbitMod+ " id: ");

      this.lista[this.idEdit] = this.gHobbitMod;
    
  }

}
