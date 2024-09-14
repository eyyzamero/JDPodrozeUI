import { Injectable } from '@angular/core';
import { IUsersGetListRes, IUsersGetListUserRes } from 'src/app/core/contracts';
import { AdminUsersListModel, AdminUsersListUserModel, IAdminUsersListModel, IAdminUsersListUserModel } from '../../models';

@Injectable()
export class AdminUsersMapperService {

    constructor() { }

    iUsersGetListUserResToIAdminUsersListUserModel(src: IUsersGetListUserRes): IAdminUsersListUserModel {
        const dest = new AdminUsersListUserModel(
            src.login,
            src.firstName,
            src.lastName,
            src.email,
            src.isAdmin
        );
        return dest;
    }

    iUsersGetListResToIAdminUsersListModel(src: IUsersGetListRes): IAdminUsersListModel {
        const dest = new AdminUsersListModel(
            src.users.map(this.iUsersGetListUserResToIAdminUsersListUserModel, this)
        );
        return dest;
    }
}