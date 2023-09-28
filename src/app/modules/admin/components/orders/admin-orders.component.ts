import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminOrdersHttpService } from './services/http/admin-orders-http.service';
import { AdminOrdersDataService } from './services/data/admin-orders-data.service';
import { IAdminOrdersExcursionModel } from './models';
import { LoadingState } from 'src/app/core/enums';

@Component({
	selector: 'app-admin-orders',
	templateUrl: './admin-orders.component.html',
	styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit, OnDestroy {

	excursions?: IAdminOrdersExcursionModel[] = [];
	loadingState: LoadingState = LoadingState.LOADING;

	private _subscriptions: Subscription[] = [];

	constructor(
		private _adminOrdersHttpService: AdminOrdersHttpService,
		private _adminOrdersDataService: AdminOrdersDataService
	) { }

	ngOnInit(): void {
		this._initSubscriptions();
		this._getData();	
	}

	private _initSubscriptions(): void {
		this._subscriptions.push(
			this._adminOrdersDataService.observable.subscribe({
				next: (value) => {
					this.excursions = value.data;
					this.loadingState = value.state;
					console.log(this.excursions);
				}
			})
		);
	}

	private _getData(): void {
		this._adminOrdersHttpService.getList();
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());	
	}
}