import { IAdminOrdersExcursionDetailsParticipantModel, IAdminOrdersExcursionDetailsParticipantUserModel } from "../../..";

export class AdminOrdersExcursionDetailsParticipantModel implements IAdminOrdersExcursionDetailsParticipantModel {

    constructor(
        public id: number = 0,
        public bookerId?: number,
        public name: string = '',
        public surname: string = '',
        public discount: boolean = false,
        public email?: string,
        public telephoneNumber?: string,
        public birthDate: Date = new Date(),
        public user?: IAdminOrdersExcursionDetailsParticipantUserModel
    ) { }
}