import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {
  AppRoutesPath,
  appRoutes,
} from './app-wrapper/app-wrapper.routing-module';
import { AppWrapperComponent } from './app-wrapper/wrapper/app-wrapper.component';
import { LoginComponent } from './account/login/login.component';
import { AccountRoutesPath } from './account/account.routing-module';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: AppRoutesPath.DEFAULT,
    component: AppWrapperComponent,
    loadChildren: () =>
      import('./app-wrapper/app-wrapper.routing-module').then(
        (m) => m.AppRoutingModule
      ),
  },
  {
    path: AccountRoutesPath.DEFAULT,
    loadChildren: () =>
      import('./account/account.routing-module').then(
        (m) => m.AccountRoutingModule
      ),
  },
];
