import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactInfo = {
    email: 'adam.dono@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY'
  };

  contactForm: FormGroup;
  isSubmitting = false;
  submitMessage: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitMessage = null;

    // Your Formspree endpoint
    const formspreeUrl = 'https://formspree.io/f/xovnkgpd';

    this.http.post(formspreeUrl, this.contactForm.value, {
      headers: { 'Accept': 'application/json' }
    }).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.submitMessage = 'Thank you for your message! I’ll get back to you soon.';
        this.contactForm.reset();
      },
      error: (error) => {
        this.isSubmitting = false;
        this.submitMessage = 'Oops, something went wrong. Please try again later.';
        console.error('Formspree error:', error);
      }
    });
  }
}