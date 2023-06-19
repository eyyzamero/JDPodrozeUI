import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExcursionsGetListShortRes } from 'src/app/core/contracts';
import { configuration } from 'src/configurations/configuration';

@Injectable({
	providedIn: 'root'
})
export class ExcursionsHttpService {

	constructor(
		private _httpClient: HttpClient
	) { }

	getListShort(): Observable<IExcursionsGetListShortRes> {
		return this._httpClient.get<IExcursionsGetListShortRes>(`${configuration.api}/Excursions/GetListShort`);
	}
}