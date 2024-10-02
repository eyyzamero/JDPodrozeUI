import { IAdminUsersListUserModel } from "../..";

export class AdminUsersListUserModel implements IAdminUsersListUserModel {
    
    constructor(
        public id: number = 0,
        public login: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public email: string = '',
        public isAdmin: boolean = false
    ) { }
}