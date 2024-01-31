import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chips-frame',
  standalone: true,
  imports: [],
  templateUrl: './chips-frame.component.html',
  styleUrl: './chips-frame.component.scss',
})
export class ChipsFrameComponent {
  @Input() chips: string[] = [];
  @Input() title: string = '';
}
