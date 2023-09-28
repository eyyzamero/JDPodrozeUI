import { PaymentMethod } from 'src/app/core/enums';
import { IExcursionEnrollPersonReq } from '../../..';

export interface IExcursionsEnrollReq {
	excursionId: number;
	booker: IExcursionEnrollPersonReq;
	participants: Array<IExcursionEnrollPersonReq>;
	paymentMethod: PaymentMethod;
}