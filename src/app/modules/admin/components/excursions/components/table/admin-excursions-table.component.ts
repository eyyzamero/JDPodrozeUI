import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
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

    @Input() sorting: boolean = true;
    @Input() templates: boolean = false;

	excursions?: IExcursionModel[] = [];
	state: LoadingState = LoadingState.LOADING;
	sort: AdminExcursionsSortType = AdminExcursionsSortType.NONE;
	active: boolean | null = null;
    buttonsEnabled: boolean = true;

	readonly LoadingState = LoadingState;
	readonly AdminExcursionsSortType = AdminExcursionsSortType;

	private _subscriptions: Subscription[] = [];

	constructor(
		private readonly _router: Router,
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _adminExcursionsDataService: AdminExcursionsDataService,
		private readonly _adminExcursionsHttpService: AdminExcursionsHttpService,
		private readonly _toastsService: ToastsService
	) { }

	ngOnInit(): void {
		this._initSubscriptions();
	}

	edit(id: number): void {
		this._router.navigate([`./form/${id}`], {
			relativeTo: this._activatedRoute,
            queryParamsHandling: 'merge'
		});
	}

	delete(id: number): void {
        this.buttonsEnabled = false;
		this._adminExcursionsHttpService.deleteObservable(id).pipe(
            take(1)
        ).subscribe({
			next: () => {
				this._toastsService.show('Pomyślnie usunięto wycieczkę', 'toast-success');
				this._getList();
                this.buttonsEnabled = true;
			},
			error: () => {
                this._toastsService.show('Wystąpił błąd', 'toast-error');
                this.buttonsEnabled = true;
            }
		})
	}

	onSort(sort: AdminExcursionsSortType): void {
		if (this.sorting && sort !== this.sort) {
			this._router.navigate(['.'], {
				queryParams: {
					sort
				},
				queryParamsHandling: 'merge',
				relativeTo: this._activatedRoute
			});
		}
	}

    makeTemplate(excursionId: number): void {
        this.buttonsEnabled = false;
        this._adminExcursionsHttpService.changeToTemplateObservable(excursionId).pipe(
            take(1)
        ).subscribe({
            next: () => {
                this._toastsService.show('Pomyślnie zmieniono wycieczkę w szablon', 'toast-success');
				this._getList();
                this.buttonsEnabled = true;
            },
            error: () => {
                this._toastsService.show('Wystąpił błąd', 'toast-error');
                this.buttonsEnabled = true;
            }
        });
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

	private _getList(): void {
		const request = new ExcursionsGetListReq(this.sort, this.active, this.templates);
		this._adminExcursionsHttpService.getList(request);
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}