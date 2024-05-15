import { Component, OnInit } from '@angular/core';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { SkillsComponent } from '../skills/skills.component';
import * as AOS from 'aos';
import { ExperienceComponent } from '../experience/experience.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports:[ContactMeComponent, SkillsComponent, ExperienceComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public showContactMe = false;

  constructor(){}

  ngOnInit(): void {
    AOS.init();
    setTimeout(()=>{
      this.showContactMe = true;
    },3000)
  }

}
