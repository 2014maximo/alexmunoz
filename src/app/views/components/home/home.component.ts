import { Component, OnInit } from '@angular/core';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { SkillsComponent } from '../skills/skills.component';
import * as AOS from 'aos';
import { ExperienceComponent } from '../experience/experience.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HobbiesComponent } from "../hobbies/hobbies.component";
import { FromBlogComponent } from "../from-blog/from-blog.component";
import { TestimonialsComponent } from "../testimonials/testimonials.component";
import { FooterComponent } from '../footer/footer.component';
import { ProjectsComponent } from '../projects/projects.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactMeComponent, SkillsComponent, ExperienceComponent, AboutMeComponent, HobbiesComponent, FromBlogComponent, FooterComponent, TestimonialsComponent, ProjectsComponent],
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

  scroll(el: HTMLElement) {
		el.scrollIntoView();
	}

}
