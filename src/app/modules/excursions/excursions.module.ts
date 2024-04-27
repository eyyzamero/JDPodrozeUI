import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcursionsRoutingModule } from './excursions-routing.module';
import { ExcursionsComponent } from '../excursions/excursions.component';
import { LoadingSpinnerModule } from '../common/loading-spinner/loading-spinner.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExcursionsEnrollSuccessComponent } from './components/enroll/components/success/excursions-enroll-success.component';
import { ExcursionsCarouselComponent } from './components/common/carousel/excursions-carousel.component';

@NgModule({
	declarations: [
		ExcursionsComponent,
		ExcursionsEnrollSuccessComponent
	],
	imports: [
		CommonModule,
		LoadingSpinnerModule,
		CKEditorModule,
		FormsModule,
		ReactiveFormsModule,
		NgbModule,
		ExcursionsCarouselComponent,
		ExcursionsRoutingModule
	]
})
export class ExcursionsModule { }