import { PaymentMethod, PaymentStatus } from "src/app/core/enums";
import { IOrdersGetExcursionOrdersWithDetailsOrderParticipantRes } from '../../../..';

export interface IOrdersGetExcursionOrdersWithDetailsOrderRes {
    id: string;
    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
    bookerId: number;
    price: number;
    participants: IOrdersGetExcursionOrdersWithDetailsOrderParticipantRes[];
}