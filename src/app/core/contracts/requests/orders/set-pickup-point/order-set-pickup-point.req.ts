import { IOrderSetPickupPointReq } from "../../..";

export class OrderSetPickupPointReq implements IOrderSetPickupPointReq {

    constructor(
        public orderId: string = '',
        public pickupPointId: string = ''
    ) { }
}