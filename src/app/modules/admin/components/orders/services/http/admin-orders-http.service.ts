import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OrdersHttpService } from 'src/app/core/services/clients/orders/orders-http.service';
import { AdminOrdersMapperService } from '../mapper/admin-orders-mapper.service';
import { AdminOrdersDataService } from '../data/admin-orders-data.service';
import { IOrdersChangePaymentStatusReq } from 'src/app/core/contracts';

@Injectable({
	providedIn: 'root'
})
export class AdminOrdersHttpService {

	constructor(
		private _ordersHttpService: OrdersHttpService,
		private _adminOrdersMapperService: AdminOrdersMapperService,
		private _adminOrdersDataService: AdminOrdersDataService
	) { }

	getList(): void {
		this._ordersHttpService.getList().pipe(
			map(res => this._adminOrdersMapperService.arrayOfIOrdersGetListItemResToArrayOfIAdminOrdersExcursionModel(res))
		).subscribe({
			next: (value) => this._adminOrdersDataService.add(value),
			error: (error) => this._adminOrdersDataService.addError(error)
		});
	}

	changePaymentStatusObservable(orderId: string, request: IOrdersChangePaymentStatusReq): Observable<void> {
		return this._ordersHttpService.changePaymentStatus(orderId, request);
	}
}