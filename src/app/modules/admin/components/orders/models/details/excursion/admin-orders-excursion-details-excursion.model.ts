import { IAdminOrdersExcursionDetailsExcursionModel } from "../..";

export class AdminOrdersExcursionDetailsExcursionModel implements IAdminOrdersExcursionDetailsExcursionModel {

    constructor(
        public id: number = 0,
        public title: string = '',
        public active: boolean = false,
        public dateFrom?: Date,
        public dateTo?: Date,
        public priceGross: number = 0,
        public discountPriceGross: number = 0,
        public seats: number = 0,
        public availableSeats: number = 0,
        public sum: number = 0
    ) { }
}