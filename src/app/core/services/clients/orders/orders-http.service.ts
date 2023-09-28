import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrdersChangePaymentStatusReq, IOrdersGetListItemRes } from 'src/app/core/contracts';
import { configuration } from 'src/configurations/configuration';

@Injectable({
	providedIn: 'root'
})
export class OrdersHttpService {

	constructor(
		private _httpClient: HttpClient
	) { }

	getList(): Observable<IOrdersGetListItemRes[]> {
		return this._httpClient.get<IOrdersGetListItemRes[]>(`${configuration.api}/Orders/GetList`);
	}

	changePaymentStatus(orderId: string, request: IOrdersChangePaymentStatusReq): Observable<void> {
		return this._httpClient.post<void>(`${configuration.api}/Orders/ChangePaymentStatus/${orderId}`, request);
	}
}