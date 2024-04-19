import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrdersGetListRes, IOrdersChangePaymentStatusReq, IOrderGetListReq, IOrdersGetExcursionOrdersWithDetailsRes } from 'src/app/core/contracts';
import { configuration } from 'src/configurations/configuration';

@Injectable({
	providedIn: 'root'
})
export class OrdersHttpService {

	constructor(
		private _httpClient: HttpClient
	) { }

	getList(req: IOrderGetListReq): Observable<IOrdersGetListRes> {
		return this._httpClient.post<IOrdersGetListRes>(`${configuration.api}/Orders`, req);
	}

    getExcursionOrdersWithDetails(excursionId: number): Observable<IOrdersGetExcursionOrdersWithDetailsRes> {
        return this._httpClient.get<IOrdersGetExcursionOrdersWithDetailsRes>(`${configuration.api}/Orders/GetExcursionOrdersWithDetails/${excursionId}`);
    }

	changePaymentStatus(orderId: string, request: IOrdersChangePaymentStatusReq): Observable<void> {
		return this._httpClient.post<void>(`${configuration.api}/Orders/ChangePaymentStatus/${orderId}`, request);
	}
}