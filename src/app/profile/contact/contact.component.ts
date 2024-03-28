import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ContactForm } from '../../models/contact-form';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isSubmitted = false;
  submitting = false;
  constructor(private email: EmailService) {}
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl(''),
    message: new FormControl('', Validators.required),
  });

  async contactMe() {
    if (this.contactForm.invalid) return;
    this.submitting = true;
    try {
      await this.email.sendEmail(this.contactForm.getRawValue() as ContactForm);
      this.submitting = false;
      this.isSubmitted = true;
    } catch (error) {
      this.submitting = false;
      this.isSubmitted = false;
    }
  }
}
