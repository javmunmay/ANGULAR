import { Routes } from '@angular/router';
import { PrincipalComponent } from './Component/principal/principal.component';
import { ListaDetalleComponent } from './Component/lista-detalle/lista-detalle.component';

export const routes: Routes = [

    {
        path:"",
        component: PrincipalComponent
      },
      {
        path:"facturaInfo-add/:id/:numero",
        component: ListaDetalleComponent
      
      }
];
