import { Routes } from '@angular/router';
import { HomeComponent } from './app-wrapper/home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutesPath, appRoutes } from './app-wrapper/app.routing-module';
import { AppWrapperComponent } from './app-wrapper/wrapper/app-wrapper.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: AppRoutesPath.HOME,
    component: AppWrapperComponent,
    loadChildren: () =>
      import('./app-wrapper/app.routing-module').then(
        (m) => m.AppRoutingModule
      ),
    pathMatch: 'full',
  },
];
