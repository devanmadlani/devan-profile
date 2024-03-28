import { Injectable } from '@angular/core';
import {
  DocumentReference,
  Firestore,
  addDoc,
  collection,
} from '@angular/fire/firestore';
import { ContactForm } from '../models/contact-form';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  // fireStore: Firestore = inject(Firestore);
  constructor(private firestore: Firestore) {}

  sendEmail(contactForm: ContactForm): Promise<DocumentReference> {
    const contactCollecton = collection(this.firestore, 'contact');
    return addDoc(contactCollecton, contactForm);
  }
}
