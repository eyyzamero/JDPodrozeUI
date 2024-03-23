import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthLoginReq, AuthRegisterReq, IAccountRegisterRes, IAuthIsLoginAvailableReq } from 'src/app/core/contracts';
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

	register(request: AuthRegisterReq): Observable<IAccountRegisterRes> {
		return this._httpClient.post<IAccountRegisterRes>(`${configuration.api}/Account/Register`, request);
	}

    isLoginAvailable(request: IAuthIsLoginAvailableReq): Observable<boolean> {
        return this._httpClient.post<boolean>(`${configuration.api}/Account/IsLoginAvailable`, request);
    }
}