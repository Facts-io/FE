import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'facts-centered-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './centered-card.component.html',
  styleUrl: './centered-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenteredCardComponent {}
