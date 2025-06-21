import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';

export const routes: Routes = [
    {
        path:'inicio',
        component:InicioComponent
    },
    {
        path:'acercade',
        component:AcercaDeComponent
    },
    {
        path:'login',
        component:AcercaDeComponent
    },
    {
        path:'**',
        component:InicioComponent
    }
];
