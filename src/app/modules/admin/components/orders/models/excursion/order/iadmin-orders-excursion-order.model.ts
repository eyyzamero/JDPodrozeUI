import { PaymentMethod, PaymentStatus } from 'src/app/core/enums';
import { IAdminOrdersExcursionOrderParticipantModel } from '../..';

export interface IAdminOrdersExcursionOrderModel {
	orderId: string;
	paymentMethod: PaymentMethod;
	paymentStatus: PaymentStatus;
	bookerId: number;
	price: number;
	participants: IAdminOrdersExcursionOrderParticipantModel[];
}