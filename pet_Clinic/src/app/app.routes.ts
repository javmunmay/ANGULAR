import { Routes } from '@angular/router';
import { OwnersComponent } from './component/owners/owners.component';
import { FormOwnerComponent } from './component/form-owner/form-owner.component';

export const routes: Routes = [
    {
        path: '', 
        component: OwnersComponent

    },
    {
        path: "personas-add/:id",
        component: FormOwnerComponent

    }
];
