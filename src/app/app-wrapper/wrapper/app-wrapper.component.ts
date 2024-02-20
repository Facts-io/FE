import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppWrapperModule } from '../app-wrapper.module';
import { AppNavbarComponent } from '../../../shared/components/app-navbar/app-navbar.component';

@Component({
  selector: 'facts-app-wrapper',
  standalone: true,
  templateUrl: './app-wrapper.component.html',
  styleUrl: './app-wrapper.component.scss',
  imports: [RouterOutlet, AppWrapperModule],
})
export class AppWrapperComponent {}
