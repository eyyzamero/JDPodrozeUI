import { IAccountAddOrEditReq } from "../..";

export class AccountAddOrEditReq implements IAccountAddOrEditReq {

    constructor(
        public id?: number,
        public login: string = '',
        public password?: string,
        public firstName: string = '',
        public lastName: string = '',
        public email: string = ''
    ) { }
}