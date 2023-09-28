import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExcursionsAddReq, IExcursionsEditReq, IExcursionsEnrollReq, IExcursionsGetItemRes, IExcursionsGetListRes, IExcursionsGetListShortRes } from 'src/app/core/contracts';
import { configuration } from 'src/configurations/configuration';

@Injectable({
	providedIn: 'root'
})
export class ExcursionsHttpClientService {

	constructor(
		private _httpClient: HttpClient
	) { }

	getItem(id: number): Observable<IExcursionsGetItemRes> {
		return this._httpClient.get<IExcursionsGetItemRes>(`${configuration.api}/Excursions/GetItem/${id}`);
	}

	getList(): Observable<IExcursionsGetListRes> {
		return this._httpClient.get<IExcursionsGetListRes>(`${configuration.api}/Excursions/GetList`);
	}

	getListShort(): Observable<IExcursionsGetListShortRes> {
		return this._httpClient.get<IExcursionsGetListShortRes>(`${configuration.api}/Excursions/GetListShort`);
	}

	add(req: IExcursionsAddReq): Observable<void> {
		return this._httpClient.post<void>(`${configuration.api}/Excursions/Add`, req);
	}

	edit(req: IExcursionsEditReq): Observable<void> {
		return this._httpClient.post<void>(`${configuration.api}/Excursions/Edit`, req);
	}

	delete(id: number): Observable<void> {
		return this._httpClient.delete<void>(`${configuration.api}/Excursions/Delete/${id}`);
	}

	enroll(req: IExcursionsEnrollReq) {
		return this._httpClient.post<string | undefined>(`${configuration.api}/Excursions/Enroll`, req);
	}
}