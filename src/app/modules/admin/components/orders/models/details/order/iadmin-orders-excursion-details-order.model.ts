import { PaymentMethod, PaymentStatus } from "src/app/core/enums";
import { IAdminOrdersExcursionDetailsParticipantModel, IAdminOrdersExcursionDetailsPickupPointModelBase } from "../..";

export interface IAdminOrdersExcursionDetailsOrderModel {
    id: string;
    paymentMethod: PaymentMethod;
    paymentStatus: PaymentStatus;
    bookerId: number;
    price: number;
    participants: IAdminOrdersExcursionDetailsParticipantModel[];
    pickupPoint?: IAdminOrdersExcursionDetailsPickupPointModelBase;
    isCollapsed: boolean;
}