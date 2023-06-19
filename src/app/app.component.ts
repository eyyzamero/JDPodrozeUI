import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthJsonWebTokenLocalStorageDataService } from './core/services/data/auth/jwt-local-storage/auth-json-web-token-local-storage-data.service';
import { Subscription } from 'rxjs';
import { AuthDataService } from './core/services/data/auth/auth-data.service';
import { AuthMapperService } from './core/services/mappers';
import { IAuthModel } from './core/models';
import { JsonWebTokenService } from './core/services/common/jwt/json-web-token.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

	auth: IAuthModel | null = null;

	private _subscriptions: Subscription[] = [];

	constructor(
		private _authJsonWebTokenLocalStorageDataService: AuthJsonWebTokenLocalStorageDataService,
		private _authDataService: AuthDataService,
		private _authMapperService: AuthMapperService,
		private _jsonWebTokenService: JsonWebTokenService
	) { }

	private _initObservables(): void {
		this._subscriptions.push(
			this._authJsonWebTokenLocalStorageDataService.observable.subscribe({
				next: (value) => {
					if (value.data && !this._jsonWebTokenService.hasTokenExpired(value.data)) {
						const auth = this._authMapperService.jsonWebTokenToIAuthModel(value.data!)
						this._authDataService.add(auth);
					} else
						this._authDataService.clear();
				}
			})
		);
	}

	ngOnInit(): void {
		this._initObservables();
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}