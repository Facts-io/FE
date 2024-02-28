import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'facts-options',
  standalone: true,
  imports: [],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionsComponent {
  constructor() {
    console.log('OptionsComponent');
  }
}
