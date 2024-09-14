import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/core/services';
import { IAdminOrdersExcursionDetailsModel, IAdminOrdersExcursionDetailsOrderModel, IAdminOrdersExcursionDetailsParticipantModel } from '../../../models';
import { PaymentStatus } from 'src/app/core/enums';

@Injectable({
    providedIn: 'root'
})
export class AdminOrdersDetailsDataService extends BaseDataService<IAdminOrdersExcursionDetailsModel | undefined> {

    constructor() {
        super(undefined)
    }
    
    override add(data?: IAdminOrdersExcursionDetailsModel, next?: boolean): void {
        if (data)
            this._recalculateExcursionSum(data);

        super.add(data, next);    
    }

    changePaymentStatus(orderId: string, status: PaymentStatus): void {
        const orderIndex = this.currentValue.data?.orders.findIndex(x => x.id === orderId);

        if (orderIndex !== undefined && orderIndex !== -1) {
            this.currentValue.data!.orders[orderIndex].paymentStatus = status;
            this.add(this.currentValue.data!);
        }
    }

    deleteParticipant(participantId: number): void {
        const orderIndex = this.currentValue.data?.orders.findIndex(x => x.participants.some(x => x.id === participantId));

        if (orderIndex !== undefined && orderIndex !== -1) {
            const participantIndex = this.currentValue.data!.orders[orderIndex].participants.findIndex(x => x.id === participantId)!;
            const participant = this.currentValue.data!.orders[orderIndex].participants[participantIndex];
            
            if (!participant.bookerId)
                this._removeOrder(orderIndex);
            else {
                this._removeParticipant(orderIndex, participantIndex);
                this._recalculateOrderSum(orderIndex);
                this.currentValue.data!.excursion.availableSeats++;
            }
            this.add(this.currentValue.data);
        }
    }

    addParticipant(participant: IAdminOrdersExcursionDetailsParticipantModel, orderId: string): void {
        const orderIndex = this.currentValue.data?.orders.findIndex(x => x.id === orderId);

        if (this.currentValue.data && orderIndex !== undefined && orderIndex !== -1) {
            this.currentValue.data.orders[orderIndex].participants.push(participant);
            this._recalculateOrderSum(orderIndex);
            this.currentValue.data!.excursion.availableSeats--;
            this.add(this.currentValue.data);
        }
    }

    editParticipant(participant: IAdminOrdersExcursionDetailsParticipantModel, orderId: string): void {
        const orderIndex = this.currentValue.data?.orders.findIndex(x => x.id === orderId);

        if (this.currentValue.data && orderIndex !== undefined && orderIndex !== -1) {
            const participantIndex = this.currentValue.data.orders[orderIndex].participants.findIndex(x => x.id === participant.id);

            if (participantIndex !== undefined && participantIndex !== -1) {
                this.currentValue.data.orders[orderIndex].participants[participantIndex] = participant;
                this._recalculateOrderSum(orderIndex);
                this.add(this.currentValue.data);
            }
        }
    }

    setPickupPoint(orderId: string, pickupPointId: string): void {
        const orderIndex = this.currentValue.data?.orders.findIndex(x => x.id === orderId);

        if (this.currentValue.data && orderIndex !== undefined && orderIndex !== -1) {
            const pickupPoint = this.currentValue.data.excursion.pickupPoints.find(x => x.id === pickupPointId);
            this.currentValue.data!.orders[orderIndex].pickupPoint = pickupPoint;
            this.add(this.currentValue.data);
        }
    }

    private _removeParticipant(orderIndex: number, participantIndex: number): void {
        this.currentValue.data!.orders[orderIndex].participants.splice(participantIndex, 1);
    }

    private _removeOrder(orderIndex: number): void {
        this.currentValue.data!.orders.splice(orderIndex, 1);
    }

    private _recalculateOrderSum(orderIndex: number): void {
        const excursion = this.currentValue.data!.excursion;
        this.currentValue.data!.orders[orderIndex].price = this.currentValue.data!.orders[orderIndex].participants.reduce<number>((accumulator, item) => {
            return accumulator += item.discount ? excursion.discountPriceGross : excursion.priceGross
        }, 0);
    }

    private _recalculateExcursionSum(data?: IAdminOrdersExcursionDetailsModel): void {
        let excursion = data ? data.excursion : this.currentValue.data!.excursion;
        excursion.sum = (data ? data.orders : this.currentValue.data!.orders).reduce<number>((accumulator, order) => {
           return accumulator += order.price
        }, 0);
    }
}