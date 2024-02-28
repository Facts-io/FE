import { Route, RouterModule, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { OptionsComponent } from './options/options.component';

export enum AppRoutesPath {
  HOME = 'app',
  OPTIONS = 'options',
}

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: AppRoutesPath.OPTIONS,
    component: OptionsComponent,
  },
];

@NgModule({
  providers: [provideRouter(appRoutes)],
})
export class AppRoutingModule {}
