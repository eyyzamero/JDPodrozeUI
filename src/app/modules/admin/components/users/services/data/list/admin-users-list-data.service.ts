import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/core/services';
import { AdminUsersListModel, IAdminUsersListModel } from '../../../models';

@Injectable()
export class AdminUsersListDataService extends BaseDataService<IAdminUsersListModel> {

    constructor() {
        super(new AdminUsersListModel());
    }
}