import { Injectable } from '@angular/core';
import {
  Auth,
  UserCredential,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

declare var gapi: any;

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(public firebaseAuth: Auth) {}

  login(user: { email: string; password: string }): Promise<UserCredential> {
    return signInWithEmailAndPassword(
      this.firebaseAuth,
      user.email,
      user.password
    );
  }
}
