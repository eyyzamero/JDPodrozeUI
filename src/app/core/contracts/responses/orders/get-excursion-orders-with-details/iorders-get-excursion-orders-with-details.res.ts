import { IOrdersGetExcursionOrdersWithDetailsExcursionRes, IOrdersGetExcursionOrdersWithDetailsOrderRes } from "../../..";

export interface IOrdersGetExcursionOrdersWithDetailsRes {
    excursion: IOrdersGetExcursionOrdersWithDetailsExcursionRes;
    orders: IOrdersGetExcursionOrdersWithDetailsOrderRes[];
}