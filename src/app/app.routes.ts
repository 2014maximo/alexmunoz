import { Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { AboutMeComponent } from './views/components/about-me/about-me.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    // Otras rutas aquí
  ];
