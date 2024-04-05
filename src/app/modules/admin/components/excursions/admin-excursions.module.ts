import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcursionsRoutingModule } from './admin-excursions-routing.module';
import { AdminExcursionsComponent } from './admin-excursions.component';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from 'src/app/modules/common/select/select.component';
import { AdminExcursionsFormCommonComponent } from './components/common/form/admin-excursions-form.component';

@NgModule({
    declarations: [
        AdminExcursionsComponent,
    ],
    imports: [
        CommonModule,
        LoadingSpinnerModule,
        CKEditorModule,
        NgbModule,
        ReactiveFormsModule,
        NgbDatepickerModule,
        ExcursionsRoutingModule,
        FormsModule,
        SelectComponent,
        AdminExcursionsFormCommonComponent
    ]
})
export class ExcursionsModule { }