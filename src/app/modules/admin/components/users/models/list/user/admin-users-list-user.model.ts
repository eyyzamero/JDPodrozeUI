import { IAdminUsersListUserModel } from "../..";

export class AdminUsersListUserModel implements IAdminUsersListUserModel {
    
    constructor(
        public login: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public email: string = '',
        public isAdmin: boolean = false
    ) { }
}