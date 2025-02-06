import { Routes } from '@angular/router';
import { OwnersComponent } from './component/owners/owners.component';
import { FormOwnerComponent } from './component/form-owner/form-owner.component';
import { DetailOwnerComponent } from './component/detail-owner/detail-owner.component';

export const routes: Routes = [
    {
        path: '', 
        component: OwnersComponent

    },
    {
        path: "personas-add/:id",
        component: DetailOwnerComponent

    }
];
