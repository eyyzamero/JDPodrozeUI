import { PaymentMethod, PaymentStatus } from "src/app/core/enums";
import { IAdminOrdersExcursionDetailsOrderModel, IAdminOrdersExcursionDetailsParticipantModel } from "../..";

export class AdminOrdersExcursionDetailsOrderModel implements IAdminOrdersExcursionDetailsOrderModel {
    
    constructor(
        public id: string = '',
        public paymentMethod: PaymentMethod = PaymentMethod.TRADITIONAL_TRANSFER,
        public paymentStatus: PaymentStatus = PaymentStatus.NOT_PAID,
        public bookerId: number = 0,
        public price: number = 0,
        public participants: IAdminOrdersExcursionDetailsParticipantModel[] = [],
        public isCollapsed: boolean = true
    ) { }
} 