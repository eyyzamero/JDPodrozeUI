import { IAdminOrdersExcursionDetailsParticipantUserModel } from "../../..";

export interface IAdminOrdersExcursionDetailsParticipantModel {
    id: number;
    bookerId?: number;
    name: string;
    surname: string;
    discount: boolean;
    email?: string;
    telephoneNumber?: string;
    birthDate: Date;
    user?: IAdminOrdersExcursionDetailsParticipantUserModel;
}