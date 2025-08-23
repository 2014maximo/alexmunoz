import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ITestimonial } from './models/testimonial.model';
import { TESTIMONIAL } from './constants/testimonial.constant';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  TESTIMONIALS: ITestimonial[] = TESTIMONIAL

  constructor(public translate: TranslateService,) {
		this.translate.addLangs(['fr', 'en', 'es']);
		this.translate.setDefaultLang('es');
		this.translate.use('es');
	}

}
