import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'facts-app-navbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.scss',
})
export class AppNavbarComponent {}
