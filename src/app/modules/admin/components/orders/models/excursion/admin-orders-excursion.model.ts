import { IAdminOrdersExcursionModel, IAdminOrdersExcursionOrderModel } from '..';

export class AdminOrdersExcursionModel implements IAdminOrdersExcursionModel {

	constructor(
		public id: number = 0,
		public title: string = '',
		public priceGross: number = 0,
		public orders: IAdminOrdersExcursionOrderModel[] = [],
		public dateFrom?: Date,
		public dateTo?: Date,
	) { }
}