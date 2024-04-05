import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from 'src/app/modules/common/select/select.component';
import { AdminExcursionsTableFiltersActiveComponent } from './components/filters/components/active/admin-excursions-table-filters-active.component';
import { AdminExcursionsTableFiltersComponent } from './components/filters/admin-excursions-table-filters.component';

@NgModule({
    declarations: [
        AdminExcursionsTableFiltersActiveComponent,
        AdminExcursionsTableFiltersComponent
    ],
    imports: [
        CommonModule,
        SelectComponent
    ],
    exports: [
        AdminExcursionsTableFiltersComponent
    ]
})
export class AdminExcursionsTableModule { }