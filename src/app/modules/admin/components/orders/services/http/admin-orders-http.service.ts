import { Injectable } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { OrdersHttpService } from 'src/app/core/services/clients/orders/orders-http.service';
import { AdminOrdersMapperService } from '../mapper/admin-orders-mapper.service';
import { AdminOrdersDataService } from '../data/admin-orders-data.service';
import { IOrderGetListReq, IOrderParticipantAddOrEditReq, IOrdersChangePaymentStatusReq, IOrderSetPickupPointReq } from 'src/app/core/contracts';
import { LoadingState } from 'src/app/core/enums';
import { IAdminOrdersExcursionDetailsModel } from '../../models';
import { AdminOrdersDetailsDataService } from '../data/details/admin-orders-details-data.service';

@Injectable({
	providedIn: 'root'
})
export class AdminOrdersHttpService {

	constructor(
		private readonly _ordersHttpService: OrdersHttpService,
		private readonly _adminOrdersMapperService: AdminOrdersMapperService,
		private readonly _adminOrdersDataService: AdminOrdersDataService,
        private readonly _adminOrdersDetailsDataService: AdminOrdersDetailsDataService,
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

    getExcursionOrdersWithDetails(excursionId: number): void {
        this._ordersHttpService.getExcursionOrdersWithDetails(excursionId).pipe(
            take(1),
            map(res => this._adminOrdersMapperService.iOrdersGetExcursionOrdersWithDetailsResToIAdminOrdersExcursionDetailsModel(res))
        ).subscribe({
            next: (value) => this._adminOrdersDetailsDataService.add(value),
            error: (error) => this._adminOrdersDetailsDataService.addError(error)
        });
    }

    getExcursionOrdersWithDetailsObservable(excursionId: number): Observable<IAdminOrdersExcursionDetailsModel> {
        return this._ordersHttpService.getExcursionOrdersWithDetails(excursionId).pipe(
            map(res => this._adminOrdersMapperService.iOrdersGetExcursionOrdersWithDetailsResToIAdminOrdersExcursionDetailsModel(res))
        );
    }

    changePaymentStatus(orderId: string, request: IOrdersChangePaymentStatusReq): void {
        this._ordersHttpService.changePaymentStatus(orderId, request).pipe(
            take(1)
        ).subscribe({
            next: () => this._adminOrdersDetailsDataService.changePaymentStatus(orderId, request.status)
        });
    }

	changePaymentStatusObservable(orderId: string, request: IOrdersChangePaymentStatusReq): Observable<void> {
		return this._ordersHttpService.changePaymentStatus(orderId, request);
	}

    deleteParticipant(participantId: number): void {
        this._ordersHttpService.deleteParticipant(participantId).pipe(
            take(1)
        ).subscribe({
            next: () => this._adminOrdersDetailsDataService.deleteParticipant(participantId)
        });
    }

    deleteParticipantObservable(participantId: number): Observable<string | null> {
        return this._ordersHttpService.deleteParticipant(participantId);
    }

    addOrEditParticipant(req: IOrderParticipantAddOrEditReq): void {
        this._ordersHttpService.addOrEditParticipant(req).pipe(
            take(1)
        ).subscribe({
            next: (participantId) => {
                const participant = this._adminOrdersMapperService.iOrderParticipantAddOrEditReqToAdminOrdersExcursionDetailsParticipantModel(req, participantId);
                
                participantId
                    ? this._adminOrdersDetailsDataService.addParticipant(participant, req.orderId)
                    : this._adminOrdersDetailsDataService.editParticipant(participant, req.orderId);
            }
        });
    }

    addOrEditParticipantObservable(req: IOrderParticipantAddOrEditReq): Observable<number | null> {
        return this._ordersHttpService.addOrEditParticipant(req).pipe(
            take(1)
        );
    }

    setPickupPointObservable(request: IOrderSetPickupPointReq): Observable<void> {
        return this._ordersHttpService.setPickupPoint(request).pipe(
            take(1)
        );
    }
}