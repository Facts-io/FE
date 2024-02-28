import { Route, RouterModule, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { OptionsComponent } from './options/options.component';

export enum AppRoutesPath {
  DEFAULT = 'app',
  HOME = 'home',
  OPTIONS = 'options',
}

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: AppRoutesPath.HOME,
    pathMatch: 'full',
  },
  {
    path: AppRoutesPath.HOME,
    component: HomeComponent,
  },
  {
    path: AppRoutesPath.OPTIONS,
    component: OptionsComponent,
  },
];

export function searchPage(param: AppRoutesPath) {
  return AppRoutesPath.DEFAULT + '/' + param;
}

export function getRouteByUrl(url: string): AppRoutesPath {
  return url.split('/')[1] as AppRoutesPath;
}

@NgModule({
  providers: [provideRouter(appRoutes)],
})
export class AppRoutingModule {}
