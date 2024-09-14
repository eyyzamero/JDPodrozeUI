import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingState } from 'src/app/core/enums';
import { AdminUsersHttpService, AdminUsersListDataService } from '../../services';
import { AdminUsersListModel, IAdminUsersListModel } from '../../models';

@Component({
    selector: 'app-admin-users-list',
    templateUrl: './admin-users-list.component.html',
    styleUrls: ['./admin-users-list.component.scss']
})
export class AdminUsersListComponent implements OnInit, OnDestroy {

    state: WritableSignal<LoadingState> = signal(LoadingState.LOADING);
    list: WritableSignal<IAdminUsersListModel | undefined> = signal(undefined);

    readonly LoadingState = LoadingState;

    private _subscriptions: Subscription[] = [];

    constructor(
        private readonly _adminUsersHttpService: AdminUsersHttpService,
        private readonly _adminUsersListDataService: AdminUsersListDataService
    ) {
        this._adminUsersListDataService.clear();
    }

    ngOnInit(): void {
        this._initSubscriptions();
        this._adminUsersHttpService.getList();
    }

    private _initSubscriptions(): void {
        this._subscriptions.push(
            this._adminUsersListDataService.observable.subscribe({
                next: (value) => {
                    this.state.set(value.state);
                    this.list.set(value.data!);
                }
            })
        );
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(x => x.unsubscribe());
    }
}