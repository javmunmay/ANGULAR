import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPersonaComponent } from './componentes/form-persona/form-persona.component';
import { ListadoComponent } from './componentes/listado/listado.component';

const routes: Routes = [
  
{
  path:"",
  component: ListadoComponent
},
{
  path:"personas-add/:id",
  component: FormPersonaComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
