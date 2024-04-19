import { AdminOrdersExcursionDetailsExcursionModel, IAdminOrdersExcursionDetailsExcursionModel, IAdminOrdersExcursionDetailsModel, IAdminOrdersExcursionDetailsOrderModel } from "..";

export class AdminOrdersExcursionDetailsModel implements IAdminOrdersExcursionDetailsModel {

    constructor(
        public excursion: IAdminOrdersExcursionDetailsExcursionModel = new AdminOrdersExcursionDetailsExcursionModel(),
        public orders: IAdminOrdersExcursionDetailsOrderModel[] = [] 
    ) { }
}