import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { NavigationTarget } from 'src/app/core/enums';
import { IAuthModel, INavigationTabModel } from 'src/app/core/models';
import { NavigationService } from 'src/app/core/services/common/navigation/navigation.service';
import { AuthDataService } from 'src/app/core/services/data/auth/auth-data.service';
import { AuthJsonWebTokenLocalStorageDataService } from 'src/app/core/services/data/auth/jwt-local-storage/auth-json-web-token-local-storage-data.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

	auth?: IAuthModel | null = null;
	tabs: INavigationTabModel[] = [];

	private _subscriptions: Subscription[] = [];

	constructor(
		private _router: Router,
		private _ngbOffcanvasService: NgbOffcanvas,
		private _navigationService: NavigationService,
		private _authDataService: AuthDataService,
		private _authJsonWebTokenLocalStorageDataService: AuthJsonWebTokenLocalStorageDataService
	) { }

	ngOnInit(): void {
		this._initSubscriptions();
		this.tabs = this._navigationService.items.filter(x => [NavigationTarget.ALL, NavigationTarget.SIDE_MENU].includes(x.target));
	}

	private _initSubscriptions(): void {
		this._subscriptions.push(
			this._authDataService.observable.subscribe({
				next: (value) => this.auth = value.data
			})
		);
	}

	close(): void {
		this._ngbOffcanvasService.dismiss();
	}

	onNavigation(): void {
		this.close();
	}

	logout(event: Event): void {
		event.preventDefault();
		this.onNavigation();
		this._authJsonWebTokenLocalStorageDataService.clear();
		this._router.navigate(['/']);
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}