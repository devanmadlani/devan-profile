import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authServiceService: AuthServiceService) {}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  async login() {
    if (this.loginForm.invalid) return;
    try {
      const login = await this.authServiceService.login(
        this.loginForm.getRawValue() as { email: string; password: string }
      );
      console.log(login);
    } catch (error) {
      console.log(error);
      alert('error');
    }
  }
}
