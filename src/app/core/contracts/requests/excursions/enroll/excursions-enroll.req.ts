import { PaymentMethod } from 'src/app/core/enums';
import { ExcursionEnrollPersonReq, IExcursionEnrollPersonReq, IExcursionsEnrollReq } from '../../..';

export class ExcursionsEnrollReq implements IExcursionsEnrollReq {
	
	constructor(
		public excursionId: number = 0,
		public booker: IExcursionEnrollPersonReq = new ExcursionEnrollPersonReq(),
		public participants: Array<IExcursionEnrollPersonReq> = new Array<IExcursionEnrollPersonReq>(),
		public paymentMethod: PaymentMethod = PaymentMethod.TRADITIONAL_TRANSFER
	) { }
}