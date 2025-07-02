
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports:[TranslateModule, CommonModule, AboutMeComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent implements OnInit {

  defaultLanguage: string = 'es';

  constructor(public translate: TranslateService,) {
    this.translate.addLangs(['en', 'es']);
	    this.translate.setDefaultLang(this.defaultLanguage);
  }

  ngOnInit(): void {
    AOS.init();
  }
  changeLanguage(language: string){
    this.translate.use(language);
    this.defaultLanguage = language;
  }
  calcYear(date: string) {
    // Convertir el string en un objeto Date
    const dateBird = new Date(date);
    const today = new Date();
  
    // Calcular la diferencia de años
    let old = today.getFullYear() - dateBird.getFullYear();
  
    // Ajustar si aún no ha cumplido años este año
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    const birthMount = dateBird.getMonth();
    const birday = dateBird.getDate();
  
    if (
      currentMonth < birthMount ||
      (currentMonth === birthMount && currentDay < birday)
    ) {
      old--;
    }
  
    return old;
  }
}
