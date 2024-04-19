import { IOrdersGetExcursionOrdersWithDetailsOrderParticipantUserRes } from '../../../../..';

export interface IOrdersGetExcursionOrdersWithDetailsOrderParticipantRes {
    id: number;
    bookerId?: number;
    name: string;
    surname: string;
    discount: boolean;
    email?: string;
    telephoneNumber?: string;
    birthDate: Date;
    user?: IOrdersGetExcursionOrdersWithDetailsOrderParticipantUserRes;
}