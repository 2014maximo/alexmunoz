import { Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { AboutMeComponent } from './views/components/about-me/about-me.component';
import { SkillsComponent } from './views/components/skills/skills.component';
import { ContactMeComponent } from './views/components/contact-me/contact-me.component';
import { ExperienceComponent } from './views/components/experience/experience.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'projects', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactMeComponent },
  // Otras rutas aquí
];
