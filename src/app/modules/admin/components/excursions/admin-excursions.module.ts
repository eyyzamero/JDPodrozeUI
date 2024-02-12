import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcursionsRoutingModule } from './admin-excursions-routing.module';
import { AdminExcursionsTableComponent } from './components/table/admin-excursions-table.component';
import { AdminExcursionsComponent } from './admin-excursions.component';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { AdminExcursionsFormComponent } from './components/form/admin-excursions-form.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbDateParserFormatter, NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDateFormatterService } from 'src/app/core/formatters/ngb-date/ngb-date-formatter.service';
import { AdminExcursionsFormImagesComponent } from './components/form/components/images/admin-excursions-form-images.component';
import { AdminExcursionsFormDatesComponent } from './components/form/components/dates/admin-excursions-form-dates.component';
import { AdminExcursionsFormEditorComponent } from './components/form/components/editor/admin-excursions-form-editor.component';

@NgModule({
	declarations: [
		AdminExcursionsComponent,
		AdminExcursionsTableComponent,
		AdminExcursionsFormComponent,
		AdminExcursionsFormImagesComponent,
		AdminExcursionsFormDatesComponent,
		AdminExcursionsFormEditorComponent
	],
	imports: [
		CommonModule,
		LoadingSpinnerModule,
		CKEditorModule,
		NgbModule,
		ReactiveFormsModule,
		NgbDatepickerModule,
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