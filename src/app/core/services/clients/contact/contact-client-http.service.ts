import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContactReq } from 'src/app/core/contracts';
import { configuration } from 'src/configurations/configuration';

@Injectable({
	providedIn: 'root'
})
export class ContactClientHttpService {

	constructor(
		private _httpClient: HttpClient
	) { }

	contact(req: IContactReq): Observable<void> {
		return this._httpClient.post<void>(`${configuration.api}/Contact`, req);
	}
}