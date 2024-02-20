import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppWrapperComponent } from './wrapper/app-wrapper.component';
import { NgModule } from '@angular/core';

export enum AppRoutesPath {
  HOME = 'app',
}

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
