import { Component } from '@angular/core';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[ContactMeComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
