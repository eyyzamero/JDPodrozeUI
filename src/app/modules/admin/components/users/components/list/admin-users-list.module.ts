import { NgModule } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';

import { AdminUsersListRoutingModule } from './admin-users-list-routing.module';
import { AdminUsersListComponent } from './admin-users-list.component';
import { AdminUsersListTableComponent } from './table/admin-users-list-table.component';
import { LoadingSpinnerModule } from "../../../../../common/loading-spinner/loading-spinner.module";

@NgModule({
    declarations: [
        AdminUsersListComponent,
        AdminUsersListTableComponent
    ],
    imports: [
        NgIf,
        NgFor,
        NgClass,
        AdminUsersListRoutingModule,
        LoadingSpinnerModule
    ]
})
export class AdminUsersListModule { }