import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcursionsRoutingModule } from './excursions-routing.module';
import { ExcursionsComponent } from '../excursions/excursions.component';
import { ExcursionsDetailsComponent } from './components/details/excursions-details.component';
import { LoadingSpinnerModule } from '../common/loading-spinner/loading-spinner.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateParserFormatter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExcursionsDetailsImagesComponent } from './components/details/components/images/excursions-details-images.component';
import { ExcursionsEnrollComponent } from './components/enroll/excursions-enroll.component';
import { NgbDateFormatterService } from 'src/app/core/formatters/ngb-date/ngb-date-formatter.service';
import { ExcursionsEnrollSuccessComponent } from './components/enroll/components/excursions-enroll-success/excursions-enroll-success.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ExcursionsCarouselComponent } from './components/common/carousel/excursions-carousel.component';

@NgModule({
	declarations: [
		ExcursionsComponent,
		ExcursionsDetailsComponent,
		ExcursionsDetailsImagesComponent,
		ExcursionsEnrollComponent,
		ExcursionsEnrollSuccessComponent
	],
	imports: [
		CommonModule,
		LoadingSpinnerModule,
		CKEditorModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule,
		AngularSvgIconModule,
		ExcursionsCarouselComponent,
		ExcursionsRoutingModule
	],
	providers: [
		{
			provide: NgbDateParserFormatter,
			useClass: NgbDateFormatterService
		}
	]
})
export class ExcursionsModule { }