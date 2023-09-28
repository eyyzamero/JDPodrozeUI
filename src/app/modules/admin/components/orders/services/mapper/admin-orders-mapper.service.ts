import { Injectable } from '@angular/core';
import { IOrdersGetListItemOrderParticipantRes, IOrdersGetListItemOrderRes, IOrdersGetListItemRes } from 'src/app/core/contracts';
import { AdminOrdersExcursionModel, AdminOrdersExcursionOrderModel, AdminOrdersExcursionOrderParticipantModel, IAdminOrdersExcursionModel, IAdminOrdersExcursionOrderModel, IAdminOrdersExcursionOrderParticipantModel } from '../../models';

@Injectable({
	providedIn: 'root'
})
export class AdminOrdersMapperService {

	constructor() { }

	arrayOfIOrdersGetListItemResToArrayOfIAdminOrdersExcursionModel(src: IOrdersGetListItemRes[]): IAdminOrdersExcursionModel[] {
		const dest = src.map(item => this.iOrdersGetListItemResToIAdminOrdersExcursionModel(item));
		return dest;
	}

	iOrdersGetListItemOrderResToIAdminOrdersExcursionOrderModel(src: IOrdersGetListItemOrderRes): IAdminOrdersExcursionOrderModel {
		const dest: IAdminOrdersExcursionOrderModel = new AdminOrdersExcursionOrderModel(
			src.orderId,
			src.paymentMethod,
			src.paymentStatus,
			src.bookerId,
			src.price,
			src.participants.map(participant => this.iOrdersGetListItemOrderParticipantResToIAdminOrdersExcursionOrderParticipantModel(participant))
		);
		return dest;
	}
	
	iOrdersGetListItemOrderParticipantResToIAdminOrdersExcursionOrderParticipantModel(src: IOrdersGetListItemOrderParticipantRes): IAdminOrdersExcursionOrderParticipantModel {
		const dest: IAdminOrdersExcursionOrderParticipantModel = new AdminOrdersExcursionOrderParticipantModel(
			src.id,
			src.name,
			src.surname,
			src.discount,
			src.birthDate,
			src.email,
			src.bookerId,
			src.telephoneNumber
		);
		return dest;
	}

	private iOrdersGetListItemResToIAdminOrdersExcursionModel(src: IOrdersGetListItemRes): IAdminOrdersExcursionModel {
		const dest: IAdminOrdersExcursionModel = new AdminOrdersExcursionModel(
			src.id,
			src.title,
			src.priceGross,
			src.orders.map(order => this.iOrdersGetListItemOrderResToIAdminOrdersExcursionOrderModel(order)),
			src.dateFrom,
			src.dateTo
		);
		return dest;
	}
}