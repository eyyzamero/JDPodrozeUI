import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeExcursionsComponent } from './components/excursions/home-excursions.component';
import { HomeCarouselComponent } from './components/carousel/home-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeExcursionsItemComponent } from './components/excursions/components/item/home-excursions-item.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LoadingSpinnerModule } from '../common/loading-spinner/loading-spinner.module';
import { DirectivesModule } from 'src/app/core/directives/directives.module';
import { HomeNewsletterComponent } from './components/newsletter/home-newsletter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		HomeComponent,
		HomeExcursionsComponent,
		HomeCarouselComponent,
  		HomeExcursionsItemComponent,
    	HomeNewsletterComponent
	],
	imports: [
		CommonModule,
		NgbModule,
		AngularSvgIconModule,
		LoadingSpinnerModule,
		DirectivesModule,
		FormsModule,
		ReactiveFormsModule,
		HomeRoutingModule
	]
})
export class HomeModule { }