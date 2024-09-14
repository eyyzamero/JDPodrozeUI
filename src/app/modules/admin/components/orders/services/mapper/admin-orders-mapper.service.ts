import { Injectable } from '@angular/core';
import { IOrdersGetListRes, IOrdersGetListItemRes, IOrdersGetExcursionOrdersWithDetailsRes, IOrdersGetExcursionOrdersWithDetailsExcursionRes, IOrdersGetExcursionOrdersWithDetailsOrderRes, IOrdersGetExcursionOrdersWithDetailsOrderParticipantRes, IOrdersGetExcursionOrdersWithDetailsOrderParticipantUserRes, IOrderParticipantAddOrEditReq, IOrdersGetExcursionOrdersWithDetailsExcursionPickupPointRes } from 'src/app/core/contracts';
import { ExcursionModel, IExcursionModel } from 'src/app/modules/excursions/models';
import { AdminOrdersExcursionDetailsExcursionModel, AdminOrdersExcursionDetailsExcursionPickupPointModel, AdminOrdersExcursionDetailsModel, AdminOrdersExcursionDetailsOrderModel, AdminOrdersExcursionDetailsParticipantModel, AdminOrdersExcursionDetailsParticipantUserModel, IAdminOrdersExcursionDetailsExcursionModel, IAdminOrdersExcursionDetailsExcursionPickupPointModel, IAdminOrdersExcursionDetailsModel, IAdminOrdersExcursionDetailsOrderModel, IAdminOrdersExcursionDetailsParticipantModel, IAdminOrdersExcursionDetailsParticipantUserModel } from '../../models';
import { DatesService } from 'src/app/core/services';

@Injectable({
	providedIn: 'root'
})
export class AdminOrdersMapperService {

	constructor(
        private readonly _datesService: DatesService
    ) { }

    iOrderGetListResToIExcursionModel(src: IOrdersGetListRes): IExcursionModel[] {
        const dest = src.items.map(this.iOrdersGetListItemResToIExcursionModel, this);
        return dest;
    }

    iOrdersGetListItemResToIExcursionModel(src: IOrdersGetListItemRes): IExcursionModel {
        const dest = new ExcursionModel();
        dest.id = src.id,
        dest.title = src.title;
        dest.dateFrom = src.dateFrom;
        dest.dateTo = src.dateTo;
        dest.priceGross = src.priceGross;
        dest.active = src.isActive;
        dest.seats = src.seats;
        dest.availableSeats = src.availableSeats;
        return dest;
    }

    IOrdersGetExcursionOrdersWithDetailsExcursionPickupPointResToIAdminOrdersExcursionDetailsExcursionPickupPointModel(src: IOrdersGetExcursionOrdersWithDetailsExcursionPickupPointRes): IAdminOrdersExcursionDetailsExcursionPickupPointModel {
        const dest = new AdminOrdersExcursionDetailsExcursionPickupPointModel(src.id, src.name);
        return dest;
    }

    iOrdersGetExcursionOrdersWithDetailsExcursionResToIAdminOrdersExcursionDetailsExcursionModel(src: IOrdersGetExcursionOrdersWithDetailsExcursionRes): IAdminOrdersExcursionDetailsExcursionModel {
        const dest = new AdminOrdersExcursionDetailsExcursionModel(
            src.id,
            src.title,
            src.active,
            src.dateFrom,
            src.dateTo,
            src.priceGross,
            src.discountPriceGross,
            src.seats,
            src.availableSeats,
            src.pickupPoints.map(this.IOrdersGetExcursionOrdersWithDetailsExcursionPickupPointResToIAdminOrdersExcursionDetailsExcursionPickupPointModel, this)
        );
        return dest;
    }

    iOrdersGetExcursionOrdersWithDetailsOrderParticipantUserResToIAdminOrdersExcursionDetailsParticipantUserModel(src: IOrdersGetExcursionOrdersWithDetailsOrderParticipantUserRes): IAdminOrdersExcursionDetailsParticipantUserModel {
        const dest = new AdminOrdersExcursionDetailsParticipantUserModel(
            src.id,
            src.login
        );
        return dest;
    }

    iOrdersGetExcursionOrdersWithDetailsOrderParticipantResToIAdminOrdersExcursionDetailsParticipantModel(src: IOrdersGetExcursionOrdersWithDetailsOrderParticipantRes): IAdminOrdersExcursionDetailsParticipantModel {
        const dest = new AdminOrdersExcursionDetailsParticipantModel(
            src.id,
            src.bookerId,
            src.name.trim(),
            src.surname.trim(),
            src.discount,
            src.email?.trim(),
            src.telephoneNumber,
            new Date(src.birthDate),
            src.user ? this.iOrdersGetExcursionOrdersWithDetailsOrderParticipantUserResToIAdminOrdersExcursionDetailsParticipantUserModel(src.user) : undefined
        );
        return dest;
    }

    iOrdersGetExcursionOrdersWithDetailsOrderResToIAdminOrdersExcursionDetailsOrderModel(src: IOrdersGetExcursionOrdersWithDetailsOrderRes, pickupPoints: IAdminOrdersExcursionDetailsExcursionPickupPointModel[]): IAdminOrdersExcursionDetailsOrderModel {
        const dest = new AdminOrdersExcursionDetailsOrderModel(
            src.id,
            src.paymentMethod,
            src.paymentStatus,
            src.bookerId,
            src.price,
            src.participants.map(this.iOrdersGetExcursionOrdersWithDetailsOrderParticipantResToIAdminOrdersExcursionDetailsParticipantModel, this),
            src.pickupPointId ? pickupPoints.find(x => x.id === src.pickupPointId) : undefined
        );
        return dest;
    }

    iOrdersGetExcursionOrdersWithDetailsResToIAdminOrdersExcursionDetailsModel(src: IOrdersGetExcursionOrdersWithDetailsRes): IAdminOrdersExcursionDetailsModel {
        const dest = new AdminOrdersExcursionDetailsModel();
        dest.excursion = this.iOrdersGetExcursionOrdersWithDetailsExcursionResToIAdminOrdersExcursionDetailsExcursionModel(src.excursion),
        dest.orders = src.orders.map(order => this.iOrdersGetExcursionOrdersWithDetailsOrderResToIAdminOrdersExcursionDetailsOrderModel(order, dest.excursion.pickupPoints), this)
        
        let sum = 0;
        dest.orders.forEach(order => {
            sum += order.participants.reduce((accumulator, item) => accumulator += item.discount ? dest.excursion.discountPriceGross : dest.excursion.priceGross, 0);
        });
        dest.excursion.sum = sum;

        return dest;
    }

    iOrderParticipantAddOrEditReqToAdminOrdersExcursionDetailsParticipantModel(src: IOrderParticipantAddOrEditReq, participantId: number | null = null): AdminOrdersExcursionDetailsParticipantModel {
        const dest = new AdminOrdersExcursionDetailsParticipantModel(
            participantId ? participantId : src.id,
            src.bookerId,
            src.name,
            src.surname,
            src.discount,
            src.email,
            src.telephoneNumber,
            this._datesService.ngbDateStringToDate(src.birthDate)
        );
        return dest;
    }
}