import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AppWrapperModule } from '../app-wrapper.module';
import { BehaviorSubject } from 'rxjs';
import {
  AppRoutesPath,
  getRouteByUrl,
  searchPage,
} from '../app-wrapper.routing-module';
import {
  defaultPageSubtitle,
  defaultPageTitle,
} from '../../../shared/costants';

@Component({
  selector: 'facts-app-wrapper',
  standalone: true,
  templateUrl: './app-wrapper.component.html',
  styleUrl: './app-wrapper.component.scss',
  imports: [RouterOutlet, AppWrapperModule],
})
export class AppWrapperComponent {
  pageTitle: string = defaultPageTitle;
  pageSubtitle: string = defaultPageSubtitle;

  selected$ = new BehaviorSubject<AppRoutesPath>(AppRoutesPath.HOME);

  constructor(private router: Router) {
    this.selected$.next(
      getRouteByUrl(this.router.url.slice(1)) || AppRoutesPath.HOME
    );
  }

  navigate(param: any) {
    this.selected$.next(param);
    this.router.navigate([searchPage(param)]);
  }
}
