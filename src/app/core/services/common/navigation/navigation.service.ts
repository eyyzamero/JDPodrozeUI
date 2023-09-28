import { Injectable, OnDestroy } from '@angular/core';
import { NavigationTarget, RoleType } from 'src/app/core/enums';
import { INavigationTabModel, NavigationTabModel } from 'src/app/core/models';
import { AuthDataService } from '../../data/auth/auth-data.service';
import { Subscription } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NavigationService implements OnDestroy {

	get items(): INavigationTabModel[] {
		return this._role === RoleType.ADMINISTRATOR ? this._items : this._items.filter(x => x.role !== RoleType.ADMINISTRATOR);
	};

	private _items: INavigationTabModel[] = [
		new NavigationTabModel('Wycieczki', ''),
		new NavigationTabModel('Galeria', '/gallery', true),
		new NavigationTabModel('O nas', '/about-us'),
		new NavigationTabModel('Kontakt', '/contact'),
		new NavigationTabModel('Panel administracyjny', '/admin', false, RoleType.ADMINISTRATOR, NavigationTarget.SIDE_MENU)
	];
	private _role: RoleType = RoleType.USER;
	private _subscriptions: Subscription[] = [];

	constructor(
		private _authDataService: AuthDataService
	) {
		this._subscriptions.push(
			this._authDataService.observable.subscribe({
				next: (value) => this._role = value.data?.role ?? RoleType.USER
			})
		);
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}