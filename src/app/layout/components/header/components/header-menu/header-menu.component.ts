import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IAuthModel } from 'src/app/core/models';
import { AuthDataService } from 'src/app/core/services/data/auth/auth-data.service';

@Component({
	selector: 'app-header-menu',
	templateUrl: './header-menu.component.html',
	styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit, OnDestroy {

	auth?: IAuthModel | null = null;

	private _subscriptions: Array<Subscription> = [];

	constructor(
		private _authDataService: AuthDataService
	) { }

	ngOnInit(): void {
		this._initSubscriptions();
	}

	private _initSubscriptions(): void {
		this._subscriptions.push(
			this._authDataService.observable.subscribe({
				next: (value) => this.auth = value.data
			})
		);
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}
