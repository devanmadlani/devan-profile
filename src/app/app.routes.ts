import { Routes } from '@angular/router';
import { ContactComponent } from './profile/contact/contact.component';
import { HomeComponent } from './profile/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './profile/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
];
