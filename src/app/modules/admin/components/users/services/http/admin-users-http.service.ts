import { Injectable } from '@angular/core';
import { AdminUsersListDataService, AdminUsersMapperService } from '..';
import { UsersHttpService } from 'src/app/core/services/clients';
import { map, Observable } from 'rxjs';
import { IAccountAddOrEditReq, IAccountGetListReq } from 'src/app/core/contracts';
import { AccountClientHttpService } from 'src/app/core/services/clients/account/account-client-http.service';

@Injectable()
export class AdminUsersHttpService {

    constructor(
        private readonly _adminUsersMapperService: AdminUsersMapperService,
        private readonly _adminUsersListDataService: AdminUsersListDataService,
        private readonly _usersHttpService: UsersHttpService,
        private readonly _accountClientHttpService: AccountClientHttpService
    ) { }

    getList(req: IAccountGetListReq): void {
        this._usersHttpService.getList(req).pipe(
            map(res => this._adminUsersMapperService.iUsersGetListResToIAdminUsersListModel(res))
        ).subscribe({
            next: (value) => this._adminUsersListDataService.add(value),
            error: (error) => this._adminUsersListDataService.addError(error)
        });
    }

    addOrEditObservable(req: IAccountAddOrEditReq): Observable<number | null> {
        return this._accountClientHttpService.addOrEdit(req);
    }

    deleteObservable(id: number): Observable<void> {
        return this._accountClientHttpService.delete(id);
    }
}