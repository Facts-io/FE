import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CenteredCardComponent } from '../../../shared/components/centered-card/centered-card.component';

@Component({
  selector: 'facts-login',
  standalone: true,
  imports: [CenteredCardComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
