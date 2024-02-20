import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'facts-app-wrapper',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app-wrapper.component.html',
  styleUrl: './app-wrapper.component.scss',
})
export class AppWrapperComponent {}
