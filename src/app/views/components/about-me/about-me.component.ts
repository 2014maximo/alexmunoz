import { Component } from '@angular/core';
import * as AOS from 'aos';
import { FormContactComponent } from '../form-contact/form-contact.component';

import { LangChangeEvent, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';


@Component({
	selector: 'app-about-me',
	standalone: true,
	imports: [FormContactComponent, TranslateModule, CommonModule],
	templateUrl: './about-me.component.html',
	styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

	espanish: boolean = true;
	private langChangeSubscription: Subscription | null = null;

	constructor(public translate: TranslateService,) {
		this.translate.setDefaultLang('es');
	}

	ngOnInit(): void {
		AOS.init();
		 // Suscríbete al evento onLangChange
		 this.langChangeSubscription = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
			console.log('El idioma ha cambiado a:', event.lang);
			// Aquí puedes actualizar tu variable booleana
			this.espanish = true; // O false, dependiendo de tu lógica
		  });
	  
		  // Opcional: Para establecer el estado inicial de la variable
		  // Puedes verificar el idioma actual al inicio si lo necesitas
		  if (this.translate.currentLang !== this.translate.defaultLang) {
			this.espanish = true;
		  } else {
			this.espanish = false;
		  }
	}

	ngOnDestroy(): void {
		// Asegúrate de desuscribirte para evitar fugas de memoria
		if (this.langChangeSubscription) {
		  this.langChangeSubscription.unsubscribe();
		}
	}

	changeDownload(){
		this.espanish = !this.espanish;
	}

}
