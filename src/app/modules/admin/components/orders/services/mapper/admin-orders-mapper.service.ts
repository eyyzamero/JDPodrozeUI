import { Injectable } from '@angular/core';
import { IOrdersGetListRes, IOrdersGetListItemRes, IOrdersGetExcursionOrdersWithDetailsRes, IOrdersGetExcursionOrdersWithDetailsExcursionRes, IOrdersGetExcursionOrdersWithDetailsOrderRes, IOrdersGetExcursionOrdersWithDetailsOrderParticipantRes, IOrdersGetExcursionOrdersWithDetailsOrderParticipantUserRes } from 'src/app/core/contracts';
import { ExcursionModel, IExcursionModel } from 'src/app/modules/excursions/models';
import { AdminOrdersExcursionDetailsExcursionModel, AdminOrdersExcursionDetailsModel, AdminOrdersExcursionDetailsOrderModel, AdminOrdersExcursionDetailsParticipantModel, AdminOrdersExcursionDetailsParticipantUserModel, IAdminOrdersExcursionDetailsExcursionModel, IAdminOrdersExcursionDetailsModel, IAdminOrdersExcursionDetailsOrderModel, IAdminOrdersExcursionDetailsParticipantModel, IAdminOrdersExcursionDetailsParticipantUserModel } from '../../models';

@Injectable({
	providedIn: 'root'
})
export class AdminOrdersMapperService {

	constructor() { }

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
            src.availableSeats
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
            src.birthDate,
            src.user ? this.iOrdersGetExcursionOrdersWithDetailsOrderParticipantUserResToIAdminOrdersExcursionDetailsParticipantUserModel(src.user) : undefined
        );
        return dest;
    }

    iOrdersGetExcursionOrdersWithDetailsOrderResToIAdminOrdersExcursionDetailsOrderModel(src: IOrdersGetExcursionOrdersWithDetailsOrderRes): IAdminOrdersExcursionDetailsOrderModel {
        const dest = new AdminOrdersExcursionDetailsOrderModel(
            src.id,
            src.paymentMethod,
            src.paymentStatus,
            src.bookerId,
            src.price,
            src.participants.map(this.iOrdersGetExcursionOrdersWithDetailsOrderParticipantResToIAdminOrdersExcursionDetailsParticipantModel, this)
        );
        return dest;
    }

    iOrdersGetExcursionOrdersWithDetailsResToIAdminOrdersExcursionDetailsModel(src: IOrdersGetExcursionOrdersWithDetailsRes): IAdminOrdersExcursionDetailsModel {
        const dest = new AdminOrdersExcursionDetailsModel(
            this.iOrdersGetExcursionOrdersWithDetailsExcursionResToIAdminOrdersExcursionDetailsExcursionModel(src.excursion),
            src.orders.map(this.iOrdersGetExcursionOrdersWithDetailsOrderResToIAdminOrdersExcursionDetailsOrderModel, this)
        );

        let sum = 0;
        dest.orders.forEach(order => {
            sum += order.participants.reduce((accumulator, item) => accumulator += item.discount ? dest.excursion.discountPriceGross : dest.excursion.priceGross, 0);
        });
        dest.excursion.sum = sum;

        return dest;
    }
}