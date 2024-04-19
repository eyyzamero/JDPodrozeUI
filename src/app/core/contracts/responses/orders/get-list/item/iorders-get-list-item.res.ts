export interface IOrdersGetListItemRes {
	id: number;
	title: string;
	dateFrom: Date;
	dateTo: Date;
	priceGross: number;
    isActive: boolean;
    seats: number;
    availableSeats: number;
}