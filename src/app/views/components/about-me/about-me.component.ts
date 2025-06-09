import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import * as AOS from 'aos';
import { FormContactComponent } from '../form-contact/form-contact.component';

@Component({
	selector: 'app-about-me',
	standalone: true,
	imports: [ReactiveFormsModule, FormContactComponent],
	templateUrl: './about-me.component.html',
	styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
	contactForm: FormGroup;

	constructor(private fb: FormBuilder) {
		this.contactForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			comments: ['', [Validators.required, Validators.minLength(5)]]
		});
	}
	ngOnInit(): void {
		AOS.init();
	  }
	
	  onSubmit() {
		if (this.contactForm.valid) {
		  // Aquí puedes manejar el envío, por ejemplo mostrar un mensaje o enviar a un backend
		  alert('Formulario enviado: ' + JSON.stringify(this.contactForm.value));
		  this.contactForm.reset();
		}
	  }
}
