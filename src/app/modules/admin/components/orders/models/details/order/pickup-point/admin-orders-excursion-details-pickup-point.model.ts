import { AdminOrdersExcursionDetailsPickupPointModelBase, IAdminOrdersExcursionDetailsPickupPointModel } from "../../..";

export class AdminOrdersExcursionDetailsPickupPointModel extends AdminOrdersExcursionDetailsPickupPointModelBase implements IAdminOrdersExcursionDetailsPickupPointModel {

    constructor(
        public override id: string = '',
        public override name: string = ''
    ) {
        super(id, name);
    }
}