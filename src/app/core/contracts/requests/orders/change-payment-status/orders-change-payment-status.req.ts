import { PaymentStatus } from 'src/app/core/enums';
import { IOrdersChangePaymentStatusReq } from '../../..';

export class OrdersChangePaymentStatusReq implements IOrdersChangePaymentStatusReq {
	
	constructor(
		public status: PaymentStatus = PaymentStatus.NOT_PAID
	) { }
}