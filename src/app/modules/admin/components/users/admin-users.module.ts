import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUsersRoutingModule } from './admin-users-routing.module';
import { AdminUsersListDataService } from './services/data/list/admin-users-list-data.service';
import { AdminUsersMapperService } from './services/mapper/admin-users-mapper.service';
import { AdminUsersHttpService } from './services/http/admin-users-http.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AdminUsersRoutingModule
    ],
    providers: [
        AdminUsersMapperService,
        AdminUsersListDataService,
        AdminUsersHttpService
    ]
})
export class AdminUsersModule { }
