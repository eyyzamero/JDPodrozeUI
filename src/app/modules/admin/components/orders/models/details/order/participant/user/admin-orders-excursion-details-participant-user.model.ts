import { IAdminOrdersExcursionDetailsParticipantUserModel } from "../../../..";

export class AdminOrdersExcursionDetailsParticipantUserModel implements IAdminOrdersExcursionDetailsParticipantUserModel {

    constructor(
        public id: number = 0,
        public login: string = ''
    ) { }
}