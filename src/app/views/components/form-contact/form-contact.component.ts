import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.scss'
})
export class FormContactComponent {
contactForm: FormGroup;

constructor(private fb: FormBuilder) {
		this.contactForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			comments: ['', [Validators.required, Validators.minLength(5)]]
		});
	}

  onSubmit() {
		if (this.contactForm.valid) {
		  // Aquí puedes manejar el envío, por ejemplo mostrar un mensaje o enviar a un backend
		  alert('Formulario enviado: ' + JSON.stringify(this.contactForm.value));
		  this.contactForm.reset();
		}
	  }

}
