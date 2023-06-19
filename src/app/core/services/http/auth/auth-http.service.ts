import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthLoginReq } from 'src/app/core/contracts';
import { configuration } from 'src/configurations/configuration';
import { Observable } from 'rxjs';
import { AuthJsonWebTokenLocalStorageDataService } from '../../data/auth/jwt-local-storage/auth-json-web-token-local-storage-data.service';
import { LoadingState } from 'src/app/core/enums';

@Injectable({
	providedIn: 'root'
})
export class AuthHttpService {

	constructor(
		private _httpClient: HttpClient,
		private _authJsonWebTokenLocalStorageDataService: AuthJsonWebTokenLocalStorageDataService
	) { }

	login(request: AuthLoginReq): Observable<string> {
		this._authJsonWebTokenLocalStorageDataService.updateState(LoadingState.LOADING);
		return this._httpClient.post<string>(`${configuration.api}/Account/Login`, request);
	}
}