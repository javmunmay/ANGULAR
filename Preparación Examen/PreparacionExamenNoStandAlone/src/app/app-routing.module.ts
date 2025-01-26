import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { InfoFacturaComponent } from './info-factura/info-factura.component';

const routes: Routes = [

  {
    path:"",
    component: PrincipalComponent
  },
  {
    path:"facturaInfo-add/:id/:numero",
    component: InfoFacturaComponent
  
  },
  {
    path:"facturaEdit-add/:id",
    component: InfoFacturaComponent
  
  }];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
