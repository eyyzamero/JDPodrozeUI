import { IAdminOrdersExcursionDetailsExcursionModel, IAdminOrdersExcursionDetailsOrderModel } from "..";

export interface IAdminOrdersExcursionDetailsModel {
    excursion: IAdminOrdersExcursionDetailsExcursionModel;
    orders: IAdminOrdersExcursionDetailsOrderModel[];
}