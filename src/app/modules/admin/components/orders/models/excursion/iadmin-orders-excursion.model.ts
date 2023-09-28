import { IAdminOrdersExcursionOrderModel } from '..';

export interface IAdminOrdersExcursionModel {
	id: number;
	title: string;
	dateFrom?: Date;
	dateTo?: Date;
	priceGross: number;
	orders: IAdminOrdersExcursionOrderModel[];
}