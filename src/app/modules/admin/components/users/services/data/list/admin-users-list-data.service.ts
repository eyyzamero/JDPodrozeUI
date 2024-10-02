import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/core/services';
import { AdminUsersListModel, IAdminUsersListModel, IAdminUsersListUserModel } from '../../../models';

@Injectable()
export class AdminUsersListDataService extends BaseDataService<IAdminUsersListModel> {

    constructor() {
        super(new AdminUsersListModel());
    }

    addUser(user: IAdminUsersListUserModel): void {
        if (this.currentValue.data) {
            this.currentValue.data?.users.push(user);
            this.add(this.currentValue.data);
        }
    }

    editUser(user: IAdminUsersListUserModel): void {
        const userIndex = this.currentValue.data?.users.findIndex(x => x.id === user.id);

        if (this.currentValue.data && userIndex !== undefined && userIndex !== -1)
        {
            this.currentValue.data.users[userIndex] = user;
            this.add(this.currentValue.data);
        }
    }

    deleteUser(userId: number): void {
        const userIndex = this.currentValue.data?.users.findIndex(x => x.id === userId);

        if (this.currentValue.data && userIndex !== undefined && userIndex !== -1)
        {
            this.currentValue.data.users.splice(userIndex, 1);
            this.add(this.currentValue.data);
        }
    }
}