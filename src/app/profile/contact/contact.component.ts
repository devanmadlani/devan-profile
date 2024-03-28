import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { EmailService } from '../../services/email.service';
import { FirestoreModule } from '@angular/fire/firestore';
import { ContactForm } from '../../models/contact-form';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    FirestoreModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isSubmitted = false;
  constructor(private email: EmailService) {}
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl(''),
    message: new FormControl('', Validators.required),
  });

  contactMe() {
    if (this.contactForm.invalid) return;
    this.isSubmitted = true;
    this.email.sendEmail(this.contactForm.getRawValue() as ContactForm);
  }
}
