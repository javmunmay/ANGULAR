import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Component/principal/principal.component';
import { ListaDetalleComponent } from './Component/lista-detalle/lista-detalle.component';


const routes: Routes = [

  {
    path:"",
    component: PrincipalComponent
  },
  {
    path:"facturaInfo-add/:id/:numero",
    component: ListaDetalleComponent
  
  }];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
