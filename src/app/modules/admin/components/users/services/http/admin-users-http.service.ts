import { Injectable } from '@angular/core';
import { AdminUsersListDataService, AdminUsersMapperService } from '..';
import { UsersHttpService } from 'src/app/core/services/clients';
import { map } from 'rxjs';

@Injectable()
export class AdminUsersHttpService {

    constructor(
        private readonly _adminUsersMapperService: AdminUsersMapperService,
        private readonly _adminUsersListDataService: AdminUsersListDataService,
        private readonly _usersHttpService: UsersHttpService
    ) { }

    getList(): void {
        this._usersHttpService.getList().pipe(
            map(res => this._adminUsersMapperService.iUsersGetListResToIAdminUsersListModel(res))
        ).subscribe({
            next: (value) => this._adminUsersListDataService.add(value),
            error: (error) => this._adminUsersListDataService.addError(error)
        });
    }
}