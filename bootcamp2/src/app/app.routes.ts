import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Componente2Component } from './componente2/componente2.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'componente2', component: Componente2Component},
];
