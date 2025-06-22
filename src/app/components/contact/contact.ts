import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit{

  contactForm!: FormGroup;
  formspreeUrl = 'https://formspree.io/f/mdkzlyon';
  submissionStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required]
    });
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submissionStatus = 'sending';
      this.http.post(this.formspreeUrl, this.contactForm.value)
        .subscribe({
          next: (response) => {
            console.log('Formulario enviado con éxito!', response);
            this.submissionStatus = 'success';
            this.contactForm.reset();
            setTimeout(() => this.submissionStatus = 'idle', 3000);
          },
          error: (error) => {
            console.error('Error al enviar el formulario:', error);
            this.submissionStatus = 'error';
            setTimeout(() => this.submissionStatus = 'idle', 3000);
          }
        });
    } else {
      this.contactForm.markAllAsTouched();
      this.submissionStatus = 'error';
      setTimeout(() => this.submissionStatus = 'idle', 3000);
    }
  }
}
