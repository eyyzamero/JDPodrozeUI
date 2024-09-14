import { IAdminOrdersExcursionDetailsPickupPointModelBase } from "../..";

export interface IAdminOrdersExcursionDetailsExcursionModel {
    id: number;
    title: string;
    active: boolean;
    dateFrom?: Date;
    dateTo?: Date;
    priceGross: number;
    discountPriceGross: number;
    seats: number;
    availableSeats: number;
    pickupPoints: IAdminOrdersExcursionDetailsPickupPointModelBase[];
    sum: number;
}