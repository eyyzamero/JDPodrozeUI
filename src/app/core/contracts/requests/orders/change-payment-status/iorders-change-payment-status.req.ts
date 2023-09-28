import { PaymentStatus } from 'src/app/core/enums';

export interface IOrdersChangePaymentStatusReq {
	status: PaymentStatus;
}