import { AdminOrdersListFiltersActiveOptions } from "src/app/modules/admin/components/orders/components/list/components/filters/enums";
import { IOrderGetListReq } from "../../..";

export class OrderGetListReq implements IOrderGetListReq {
    
    constructor(
        public active: number = AdminOrdersListFiltersActiveOptions.ALL
    ) { }
}