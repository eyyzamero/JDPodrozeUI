import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeExcursionsComponent } from './components/excursions/home-excursions.component';

@NgModule({
	declarations: [
		HomeComponent,
  		HomeExcursionsComponent
	],
	imports: [
		CommonModule,
		HomeRoutingModule
	]
})
export class HomeModule { }