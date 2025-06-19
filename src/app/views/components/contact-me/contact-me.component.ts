
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports:[TranslateModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent implements OnInit {

  constructor(public translate: TranslateService,) {
    this.translate.addLangs(['fr', 'en', 'es']);
	    this.translate.setDefaultLang('es');
	    this.translate.use('es');
  }

  ngOnInit(): void {
    AOS.init();
  }
  changeLanguage(){
    this.translate.use('en')
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
