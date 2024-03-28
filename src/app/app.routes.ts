import { Routes } from '@angular/router';
import { HomeComponent } from './profile/home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkComponent } from './profile/work/work.component';
import { ContactComponent } from './profile/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
    ],
  },
];
