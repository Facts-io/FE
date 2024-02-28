import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from '../../shared/components/app-navbar/app-navbar.component';
import { HomeComponent } from './home/home.component';
import { PageTitleComponent } from '../../shared/components/page-title/page-title.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AppNavbarComponent, PageTitleComponent],
  exports: [CommonModule, AppNavbarComponent, PageTitleComponent],
})
export class AppWrapperModule {}
