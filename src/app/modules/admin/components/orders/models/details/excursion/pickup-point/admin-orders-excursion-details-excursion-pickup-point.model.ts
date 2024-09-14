import { AdminOrdersExcursionDetailsPickupPointModelBase, IAdminOrdersExcursionDetailsExcursionPickupPointModel } from "../../..";

export class AdminOrdersExcursionDetailsExcursionPickupPointModel extends AdminOrdersExcursionDetailsPickupPointModelBase implements IAdminOrdersExcursionDetailsExcursionPickupPointModel {

    constructor(
        public override id: string = '',
        public override name: string = ''
    ) {
        super(id, name);
    }
}