import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from '../menu/menu.component';
import { NavigationService } from 'src/app/core/services/common/navigation/navigation.service';
import { IAuthModel, INavigationTabModel } from 'src/app/core/models';
import { AuthDataService } from 'src/app/core/services/data/auth/auth-data.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	tabs: INavigationTabModel[] = [];
	auth?: IAuthModel | null = null;

	private _subscriptions: Subscription[] = [];

	constructor(
		private _router: Router,
		private _ngbOffcanvasService: NgbOffcanvas,
		private _navigationService: NavigationService,
		private _authDataService: AuthDataService
	) { }

	ngOnInit(): void {
		this._initSubscriptions();
		this.tabs = this._navigationService.items;
	}

	redirectToHomePage(): void {
		this._router.navigate(['']);
	}

	openSideMenu(): void {
		this._ngbOffcanvasService.open(MenuComponent, { backdrop: true })
	}

	private _initSubscriptions(): void {
		this._subscriptions.push(
			this._authDataService.observable.subscribe({
				next: (value) => this.auth = value.data
			})
		);
	}
}