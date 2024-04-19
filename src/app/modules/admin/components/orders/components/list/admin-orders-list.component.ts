import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminExcursionsTableViewComponent } from '../../../excursions/components/common/table-view/admin-excursions-table-view.component';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { ContextType, LoadingState } from 'src/app/core/enums';
import { IExcursionModel } from 'src/app/modules/excursions/models';
import { Subscription } from 'rxjs';
import { AdminOrdersDataService } from '../../services/data/admin-orders-data.service';
import { AdminOrdersHttpService } from '../../services/http/admin-orders-http.service';
import { AdminOrdersListFiltersComponent } from './components/filters/admin-orders-list-filters.component';
import { AdminOrdersListFiltersActiveOptions } from './components/filters/enums';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrderGetListReq } from 'src/app/core/contracts';

@Component({
    selector: 'app-admin-orders-list',
    templateUrl: './admin-orders-list.component.html',
    styleUrls: ['./admin-orders-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        LoadingSpinnerModule,
        AdminExcursionsTableViewComponent,
        AdminOrdersListFiltersComponent
    ]
})
export class AdminOrdersListComponent implements OnInit, OnDestroy {

    active: WritableSignal<AdminOrdersListFiltersActiveOptions> = signal(AdminOrdersListFiltersActiveOptions.ALL);
    state: WritableSignal<LoadingState> = signal(LoadingState.LOADING);
    excursions: WritableSignal<IExcursionModel[]> = signal([]);
    buttonsEnabled: WritableSignal<boolean> = signal(true);
    columns: (keyof IExcursionModel)[] = ['title', 'dateFrom', 'dateTo', 'seats', 'availableSeats', 'active'];

    readonly sorting: boolean = false;
    readonly context: ContextType = ContextType.EXCURSIONS_ORDERS;
    readonly LoadingState = LoadingState;

    private _subscriptions: Subscription[] = [];

    constructor(
        private readonly _router: Router,
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _adminOrdersHttpService: AdminOrdersHttpService,
        private readonly _adminOrdersDataService: AdminOrdersDataService
    ) { }

    ngOnInit(): void {
        this._initSubscriptions();
    }

    private _initSubscriptions(): void {
        this._subscriptions.push(
            this._activatedRoute.queryParams.subscribe({
                next: (queryParams) => this._handleQueryParams(queryParams)
            }),
            this._adminOrdersDataService.observable.subscribe({
                next: (value) => {
                    this.state.set(value.state);
                    this.excursions.set(value.data!);
                }
            })
        );
    }

    private _handleQueryParams(queryParams: Params): void {
        this.active.set(queryParams['active']  ? JSON.parse(queryParams['active']) as AdminOrdersListFiltersActiveOptions : AdminOrdersListFiltersActiveOptions.ALL);
        this._getList();
    }
    
    private _getList(): void {
        const req = new OrderGetListReq(this.active());
        this._adminOrdersHttpService.getList(req);
    }

    redirectToDetails(excursionId: number) {
        this._router.navigate([`./details/${excursionId}`], {
           relativeTo: this._activatedRoute 
        });
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(x => x.unsubscribe());
        this._adminOrdersDataService.clear();
    }
}