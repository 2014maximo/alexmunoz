import { Component } from '@angular/core';
import * as AOS from 'aos';
import { FormContactComponent } from '../form-contact/form-contact.component';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@Component({
	selector: 'app-about-me',
	standalone: true,
	imports: [FormContactComponent, TranslateModule, CommonModule],
	templateUrl: './about-me.component.html',
	styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

	constructor(public translate: TranslateService,) {
		this.translate.setDefaultLang('es');
	}

	ngOnInit(): void {
		AOS.init();
	  }
}
