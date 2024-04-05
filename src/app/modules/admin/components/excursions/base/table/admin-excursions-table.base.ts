import { Directive, OnDestroy, OnInit, WritableSignal, signal } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription, take } from "rxjs";
import { ContextType, LoadingState } from "src/app/core/enums";
import { IExcursionModel } from "src/app/modules/excursions/models";
import { AdminExcursionsDataService, AdminExcursionsHttpService } from "../../../../services";
import { ToastsService } from "src/app/core/services";
import { AdminExcursionsSortType } from "../../enums";

@Directive()
export abstract class AdminExcursionsTableBase implements OnInit, OnDestroy {

    excursions: WritableSignal<IExcursionModel[]> = signal([]);
    state: WritableSignal<LoadingState> = signal(LoadingState.LOADING);
    buttonsEnabled: WritableSignal<boolean> = signal(true);
    sortCurrent: WritableSignal<AdminExcursionsSortType> = signal(AdminExcursionsSortType.NONE);

    readonly LoadingState = LoadingState;
    readonly abstract sorting: boolean;
    readonly abstract context: ContextType;

    private _subscriptions: Subscription[] = [];

    constructor(
        protected readonly _router: Router,
        protected readonly _activatedRoute: ActivatedRoute,
        protected readonly _toastsService: ToastsService,
        protected readonly _adminExcursionsHttpService: AdminExcursionsHttpService,
        private readonly _adminExcursionsDataService: AdminExcursionsDataService,
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
        this.buttonsEnabled.set(false);
		this._adminExcursionsHttpService.deleteObservable(id).pipe(
            take(1)
        ).subscribe({
			next: () => {
				this._toastsService.show('Pomyślnie usunięto wycieczkę', 'toast-success');
				this._getList();
                this.buttonsEnabled.set(true);
			},
			error: () => {
                this._toastsService.show('Wystąpił błąd', 'toast-error');
                this.buttonsEnabled.set(true);
            }
		})
	}

    onSort(sort: AdminExcursionsSortType): void {
		if (this.sorting && sort !== this.sortCurrent()) {
			this._router.navigate(['.'], {
				queryParams: {
					sort
				},
				queryParamsHandling: 'merge',
				relativeTo: this._activatedRoute
			});
		}
	}

    protected abstract _handleQueryParams(queryParams: Params): void;
    protected abstract _getList(): void;

    private _initSubscriptions(): void {
        this._subscriptions.push(
            this._activatedRoute.queryParams.subscribe({
                next: (queryParams) => this._handleQueryParams(queryParams)
            }),
            this._adminExcursionsDataService.observable.subscribe({
                next: (value) => {
                    this.excursions.set(value.data!);
                    this.state.set(value.state);
                }
            })
        );
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(x => x.unsubscribe());
        this._adminExcursionsDataService.clear();
    }
}