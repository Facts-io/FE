import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AppWrapperModule } from '../app-wrapper.module';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'facts-app-wrapper',
  standalone: true,
  templateUrl: './app-wrapper.component.html',
  styleUrl: './app-wrapper.component.scss',
  imports: [RouterOutlet, AppWrapperModule],
})
export class AppWrapperComponent implements OnInit {
  selected$ = new BehaviorSubject<'home' | 'options'>('home');

  constructor(private router: Router) {
    console.log(router.config);
  }

  ngOnInit(): void {
    this.selected$.next('home');
  }

  navigate(param: 'home' | 'options') {
    this.selected$.next(param);
  }
}
