import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminExcursionTableViewActionsComponent } from './components/actions/admin-excursion-table-view-actions.component';

@NgModule({
    declarations: [
        AdminExcursionTableViewActionsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AdminExcursionTableViewActionsComponent
    ]
})
export class AdminExcursionsTableViewModule { }