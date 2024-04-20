import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OrdersHttpService } from 'src/app/core/services/clients/orders/orders-http.service';
import { AdminOrdersMapperService } from '../mapper/admin-orders-mapper.service';
import { AdminOrdersDataService } from '../data/admin-orders-data.service';
import { IOrderGetListReq, IOrdersChangePaymentStatusReq } from 'src/app/core/contracts';
import { LoadingState } from 'src/app/core/enums';
import { IAdminOrdersExcursionDetailsModel } from '../../models';

@Injectable({
	providedIn: 'root'
})
export class AdminOrdersHttpService {

	constructor(
		private readonly _ordersHttpService: OrdersHttpService,
		private readonly _adminOrdersMapperService: AdminOrdersMapperService,
		private readonly _adminOrdersDataService: AdminOrdersDataService
	) { }

	getList(req: IOrderGetListReq): void {
        this._adminOrdersDataService.updateState(LoadingState.LOADING);
		this._ordersHttpService.getList(req).pipe(
			map(res => this._adminOrdersMapperService.iOrderGetListResToIExcursionModel(res))
		).subscribe({
			next: (value) => this._adminOrdersDataService.add(value),
			error: (error) => this._adminOrdersDataService.addError(error)
		});
	}

    getExcursionOrdersWithDetailsObservable(excursionId: number): Observable<IAdminOrdersExcursionDetailsModel> {
        return this._ordersHttpService.getExcursionOrdersWithDetails(excursionId).pipe(
            map(res => this._adminOrdersMapperService.iOrdersGetExcursionOrdersWithDetailsResToIAdminOrdersExcursionDetailsModel(res))
        );
    }

	changePaymentStatusObservable(orderId: string, request: IOrdersChangePaymentStatusReq): Observable<void> {
		return this._ordersHttpService.changePaymentStatus(orderId, request);
	}

    deleteParticipantObservable(participantId: number): Observable<string | null> {
        return this._ordersHttpService.deleteParticipant(participantId);
    }
}