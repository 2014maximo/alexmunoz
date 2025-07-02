import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos';
import { IEras } from './models/experience.model';
import { EXPERIENCE } from './constants/experience.constant';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-experience',
	standalone: true,
	imports: [TranslateModule, CommonModule],
	templateUrl: './experience.component.html',
	styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {

	EXPERIENCES: IEras[] = EXPERIENCE;

	constructor(public translate: TranslateService,) {
		this.translate.addLangs(['fr', 'en', 'es']);
		this.translate.setDefaultLang('es');
		this.translate.use('es');
	}

	ngOnInit(): void {
		AOS.init();
	}
	public itsEvenNumber(numero: any): boolean {
		return (numero % 2) == 0;
	}
}
