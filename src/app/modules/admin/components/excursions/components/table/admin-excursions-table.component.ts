import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingState } from 'src/app/core/enums';
import { ToastsService } from 'src/app/core/services/common/toasts/toasts.service';
import { AdminExcursionsDataService } from 'src/app/modules/admin/services/data/admin-excursions-data.service';
import { AdminExcursionsHttpService } from 'src/app/modules/admin/services/http/admin-excursions-http.service';
import { IExcursionModel } from 'src/app/modules/excursions/models';

@Component({
	selector: 'app-admin-excursions-table',
	templateUrl: './admin-excursions-table.component.html',
	styleUrls: ['./admin-excursions-table.component.scss']
})
export class AdminExcursionsTableComponent implements OnInit, OnDestroy {

	excursions?: IExcursionModel[] = [];
	state: LoadingState = LoadingState.LOADING;

	readonly LoadingState = LoadingState;

	private _subscriptions: Subscription[] = [];

	constructor(
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
		private _adminExcursionsDataService: AdminExcursionsDataService,
		private _adminExcursionsHttpService: AdminExcursionsHttpService,
		private _toastsService: ToastsService,
	) { }

	ngOnInit(): void {
		this._initSubscriptions();
	}

	edit(id: number) {
		this._router.navigate([`./form/${id}`], {
			relativeTo: this._activatedRoute
		});
	}

	delete(id: number) {
		this._adminExcursionsHttpService.deleteObservable(id).subscribe({
			next: (value) => {
				this._toastsService.show('Pomyślnie usunięto wycieczkę', 'toast-success');
				this._adminExcursionsHttpService.getList();
			},
			error: () => this._toastsService.show('Wystąpił błąd', 'toast-error')
		})
	}

	private _initSubscriptions(): void {
		this._subscriptions.push(
			this._adminExcursionsDataService.observable.subscribe({
				next: (value) => {
					this.excursions = value.data;
					this.state = value.state;
				}
			})
		);
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}