import { Injectable } from '@angular/core';
import { AccountAddOrEditReq, IAccountAddOrEditReq, IUsersGetListRes, IUsersGetListUserRes } from 'src/app/core/contracts';
import { AdminUsersListModel, AdminUsersListUserModel, IAdminUsersListModel, IAdminUsersListUserModel } from '../../models';
import { FormGroup } from '@angular/forms';

@Injectable()
export class AdminUsersMapperService {

    constructor() { }

    iUsersGetListUserResToIAdminUsersListUserModel(src: IUsersGetListUserRes): IAdminUsersListUserModel {
        const dest = new AdminUsersListUserModel(
            src.id,
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

    iAdminUsersListUserModelToFormGroup(src: IAdminUsersListUserModel, form: FormGroup): void {
        form.controls['login'].setValue(src.login);
        form.controls['firstName'].setValue(src.firstName);
        form.controls['lastName'].setValue(src.lastName);
        form.controls['email'].setValue(src.email);
    }

    formGroupToIAccountAddOrEditReq(src: FormGroup): IAccountAddOrEditReq {
        const dest = new AccountAddOrEditReq(
            src.controls['id'].value,
            src.controls['login'].value,
            src.controls['password'].value,
            src.controls['firstName'].value,
            src.controls['lastName'].value,
            src.controls['email'].value
        );
        return dest;
    }

    IAccountAddOrEditReqToIAdminUsersListUserModel(src: IAccountAddOrEditReq): IAdminUsersListUserModel {
        const dest = new AdminUsersListUserModel(src.id, src.login, src.firstName, src.lastName, src.email, false);
        return dest;
    }
}