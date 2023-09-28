import { IOrdersGetListItemOrderRes } from 'src/app/core/contracts';

export interface IOrdersGetListItemRes {
	id: number;
	title: string;
	dateFrom: Date;
	dateTo: Date;
	priceGross: number;
	orders: IOrdersGetListItemOrderRes[];
}