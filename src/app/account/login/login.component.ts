import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'facts-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

}
