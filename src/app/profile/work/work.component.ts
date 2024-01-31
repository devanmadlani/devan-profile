import { Component } from '@angular/core';
import { ChipsFrameComponent } from '../../shared/chips-frame/chips-frame.component';
import { TimelineComponent } from '../../shared/timeline/timeline.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [TimelineComponent, ChipsFrameComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
})
export class WorkComponent {
  skills: string[] = [
    'Angular',
    'Typescript',
    'Angular Material',
    'Express Js',
    'Jira',
    'Agile',
    'Git',
    'SCSS',
    'CSS',
    'HTML',
    'Bootstrap',
    'AngularJs',
    'Ionic',
    'Jquery',
    'Javascript',
    'Firebase',
  ];
  hobbies: string[] = ['Photography', 'Badminton', 'Cooking', 'Football'];
  languages: string[] = ['English', 'Swahili', 'Hindi', 'Gujarati'];
}
