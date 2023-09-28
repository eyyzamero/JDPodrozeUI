import { IOrdersGetListItemOrderParticipantRes } from 'src/app/core/contracts';
import { PaymentMethod, PaymentStatus } from 'src/app/core/enums';

export interface IOrdersGetListItemOrderRes {
	orderId: string;
	paymentMethod: PaymentMethod;
	paymentStatus: PaymentStatus;
	bookerId: number;
	price: number;
	participants: IOrdersGetListItemOrderParticipantRes[];
}