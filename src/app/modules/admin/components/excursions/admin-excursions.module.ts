import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExcursionsRoutingModule } from './admin-excursions-routing.module';
import { AdminExcursionsTableComponent } from './components/table/admin-excursions-table.component';
import { AdminExcursionsComponent } from './admin-excursions.component';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminExcursionsTableFiltersComponent } from './components/table/components/filters/admin-excursions-table-filters.component';
import { SelectComponent } from 'src/app/modules/common/select/select.component';
import { AdminExcursionsTableFiltersActiveComponent } from './components/table/components/filters/components/admin-excursions-table-filters-active/admin-excursions-table-filters-active.component';
import { AdminExcursionsFormCommonComponent } from './components/common/form/admin-excursions-form.component';

@NgModule({
    declarations: [
        AdminExcursionsComponent,
        AdminExcursionsTableComponent,
        AdminExcursionsTableFiltersComponent,
        AdminExcursionsTableFiltersActiveComponent
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
    ],
    exports: [
        AdminExcursionsTableComponent
    ]
})
export class ExcursionsModule { }