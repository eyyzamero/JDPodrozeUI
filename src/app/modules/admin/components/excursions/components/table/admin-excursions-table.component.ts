import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingState } from 'src/app/core/enums';
import { ToastsService } from 'src/app/core/services/common/toasts/toasts.service';
import { AdminExcursionsDataService } from 'src/app/modules/admin/services/data/admin-excursions-data.service';
import { AdminExcursionsHttpService } from 'src/app/modules/admin/services/http/admin-excursions-http.service';
import { IExcursionModel } from 'src/app/modules/excursions/models';
import { AdminExcursionsSortType } from '../../enums';
import { ExcursionsGetListReq } from 'src/app/core/contracts';

@Component({
	selector: 'app-admin-excursions-table',
	templateUrl: './admin-excursions-table.component.html',
	styleUrls: ['./admin-excursions-table.component.scss']
})
export class AdminExcursionsTableComponent implements OnInit, OnDestroy {

	excursions?: IExcursionModel[] = [];
	state: LoadingState = LoadingState.LOADING;
	sort: AdminExcursionsSortType = AdminExcursionsSortType.NONE;
	active: boolean | null = null;

	readonly LoadingState = LoadingState;
	readonly AdminExcursionsSortType = AdminExcursionsSortType;

	private _subscriptions: Subscription[] = [];

	constructor(
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
		private _adminExcursionsDataService: AdminExcursionsDataService,
		private _adminExcursionsHttpService: AdminExcursionsHttpService,
		private _toastsService: ToastsService
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

	onSort(sort: AdminExcursionsSortType) {
		if (sort !== this.sort) {
			this._router.navigate(['.'], {
				queryParams: {
					sort
				},
				queryParamsHandling: 'merge',
				relativeTo: this._activatedRoute
			});
		}
	}

	private _initSubscriptions(): void {
		this._subscriptions.push(
			this._activatedRoute.queryParams.subscribe({
				next: (queryParams) => {
					this.sort = queryParams['sort'] ? +queryParams['sort'] as AdminExcursionsSortType : AdminExcursionsSortType.DATE_FROM;
					this.active = queryParams['active']  ? JSON.parse(queryParams['active']) : null;
					this._getList();
				} 
			}),
			this._adminExcursionsDataService.observable.subscribe({
				next: (value) => {
					this.excursions = value.data;
					this.state = value.state;
				}
			})
		);
	}

	private _getList() {
		const req = new ExcursionsGetListReq(this.sort, this.active);
		this._adminExcursionsHttpService.getList(req);
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}