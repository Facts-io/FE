import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from '../../shared/components/app-navbar/app-navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AppNavbarComponent],
  exports: [CommonModule, AppNavbarComponent],
})
export class AppWrapperModule {}
