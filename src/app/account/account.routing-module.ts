import { NgModule } from '@angular/core';
import { Route, provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export enum AccountRoutesPath {
  DEFAULT = 'account',
  LOGIN = 'login',
  REGISTER = 'register',
}

export const accountRoutes: Route[] = [
  {
    path: '',
    redirectTo: AccountRoutesPath.LOGIN,
    pathMatch: 'full',
  },
  {
    path: AccountRoutesPath.LOGIN,
    component: LoginComponent,
  },
  {
    path: AccountRoutesPath.REGISTER,
    component: RegisterComponent,
  },
];

export function searchPage(param: AccountRoutesPath) {
  return AccountRoutesPath.DEFAULT + '/' + param;
}

export function getRouteByUrl(url: string): AccountRoutesPath {
  return url.split('/')[1] as AccountRoutesPath;
}

@NgModule({
  providers: [provideRouter(accountRoutes)],
})
export class AccountRoutingModule {}
