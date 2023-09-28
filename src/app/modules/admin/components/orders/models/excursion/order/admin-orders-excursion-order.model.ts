import { PaymentMethod, PaymentStatus } from 'src/app/core/enums';
import { IAdminOrdersExcursionOrderModel, IAdminOrdersExcursionOrderParticipantModel } from '../..';

export class AdminOrdersExcursionOrderModel implements IAdminOrdersExcursionOrderModel {

	constructor(
		public orderId: string = '',
		public paymentMethod: PaymentMethod = PaymentMethod.TRADITIONAL_TRANSFER,
		public paymentStatus: PaymentStatus = PaymentStatus.NOT_PAID,
		public bookerId: number = 0,
		public price: number = 0,
		public participants: IAdminOrdersExcursionOrderParticipantModel[] = []
	) { }
}