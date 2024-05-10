import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

// localhost:4200/auth/
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'skills', component: SkillsComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'contact-me', component: ContactMeComponent },
      { path: '**', redirectTo: 'login' },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
