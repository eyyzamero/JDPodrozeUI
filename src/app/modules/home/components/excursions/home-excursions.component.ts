import { Component, OnDestroy, OnInit } from '@angular/core';
import { IExcursionModel } from './models';
import { Subscription } from 'rxjs';
import { HomeExcursionsDataService } from './services/data/home-excursions-data.service';
import { HomeExcursionsHttpService } from './services/http/home-excursions-http.service';

@Component({
  selector: 'app-home-excursions',
  templateUrl: './home-excursions.component.html',
  styleUrls: ['./home-excursions.component.scss']
})
export class HomeExcursionsComponent implements OnInit, OnDestroy {

	excursions?: IExcursionModel[] = undefined;

	private _subscriptions: Subscription[] = [];

	constructor(
		private _homeExcursionsDataService: HomeExcursionsDataService,
		private _homeExcursionsHttpService: HomeExcursionsHttpService
	) { }	

	ngOnInit(): void {
		this._homeExcursionsHttpService.getExcursionsListShort();
		this._subscriptions.push(
			this._homeExcursionsDataService.observable.subscribe({
				next: (value) => this.excursions = value.data
			})
		);
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}