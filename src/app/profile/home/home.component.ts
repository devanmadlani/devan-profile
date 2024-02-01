import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { WorkComponent } from '../work/work.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule, WorkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
}
