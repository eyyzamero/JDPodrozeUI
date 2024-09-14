import { IAdminOrdersExcursionDetailsPickupPointModelBase } from "../..";

export abstract class AdminOrdersExcursionDetailsPickupPointModelBase implements IAdminOrdersExcursionDetailsPickupPointModelBase {

    constructor(
        public id: string = '',
        public name: string = ''
    ) { }
}