import { NgModule } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';

import { AdminUsersListRoutingModule } from './admin-users-list-routing.module';
import { AdminUsersListComponent } from './admin-users-list.component';
import { AdminUsersListTableComponent } from './table/admin-users-list-table.component';
import { LoadingSpinnerModule } from "../../../../../common/loading-spinner/loading-spinner.module";
import { FormControlInputComponent } from 'src/app/modules/common/controls/input/form-control-input.component';

@NgModule({
    declarations: [
        AdminUsersListComponent,
        AdminUsersListTableComponent
    ],
    imports: [
        NgIf,
        NgFor,
        NgClass,
        FormControlInputComponent,
        AdminUsersListRoutingModule,
        LoadingSpinnerModule
    ]
})
export class AdminUsersListModule { }