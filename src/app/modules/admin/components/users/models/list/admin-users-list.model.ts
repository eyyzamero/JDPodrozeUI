import { IAdminUsersListModel, IAdminUsersListUserModel } from "..";

export class AdminUsersListModel implements IAdminUsersListModel {

    constructor(
        public users: IAdminUsersListUserModel[] = []
    ) { }
}