import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'facts-app-navbar',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.scss',
})
export class AppNavbarComponent {
  @Input() selected: 'home' | 'options' | null = null;

  @Output() home = new EventEmitter();
  @Output() options = new EventEmitter();

  constructor() {}
}
