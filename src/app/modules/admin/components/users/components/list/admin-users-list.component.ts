import { Component, Injector, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { LoadingState } from 'src/app/core/enums';
import { AdminUsersHttpService, AdminUsersListDataService, AdminUsersMapperService } from '../../services';
import { IAdminUsersListModel, IAdminUsersListUserModel } from '../../models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminUsersAddEditModalComponent } from '../modals/add-edit/admin-users-add-edit-modal.component';
import { ToastsService } from 'src/app/core/services';
import { FormControl } from '@angular/forms';
import { AccountGetListReq } from 'src/app/core/contracts';

@Component({
    selector: 'app-admin-users-list',
    templateUrl: './admin-users-list.component.html',
    styleUrls: ['./admin-users-list.component.scss']
})
export class AdminUsersListComponent implements OnInit, OnDestroy {

    state: WritableSignal<LoadingState> = signal(LoadingState.LOADING);
    list: WritableSignal<IAdminUsersListModel | undefined> = signal(undefined);
    searchText: FormControl<string | null> = new FormControl<string | null>(null);

    readonly LoadingState = LoadingState;

    private _subscriptions: Subscription[] = [];

    constructor(
        private readonly _injector: Injector,
        private readonly _ngbModal: NgbModal,
        private readonly _adminUsersHttpService: AdminUsersHttpService,
        private readonly _adminUsersListDataService: AdminUsersListDataService,
        private readonly _adminUsersMapperService: AdminUsersMapperService,
        private readonly _toastsService: ToastsService
    ) {
        this._adminUsersListDataService.clear();
    }

    ngOnInit(): void {
        this._initSubscriptions();
        this._getList();
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

    add(): void {
        this._openAddEditUserModal();
    }

    edit(user: IAdminUsersListUserModel): void {
        this._openAddEditUserModal(user);
    }

    delete(userId: number): void {
        this._adminUsersHttpService.deleteObservable(userId).pipe(
            take(1)
        ).subscribe({
            next: () => {
                this._adminUsersListDataService.deleteUser(userId);
                this._toastsService.show('Użytkownik został usunięty pomyślnie', 'toast-success');
            },
            error: () => this._toastsService.show('Wystąpił błąd podczas usuwania użytkownika', 'toast-error')
        });
    }

    onSearch(searchText: any) {
        this._getList(searchText);
    }

    private _getList(searchText: string | null = this.searchText.value) {
        const req = new AccountGetListReq(searchText ?? undefined);
        this._adminUsersHttpService.getList(req);
    }

    private _openAddEditUserModal(user?: IAdminUsersListUserModel): void {
        const injector = Injector.create({
            providers: [
                {
                    provide: AdminUsersMapperService,
                    useValue: this._adminUsersMapperService
                },
                {
                    provide: AdminUsersListDataService,
                    useValue: this._adminUsersListDataService
                },
                {
                    provide: AdminUsersHttpService,
                    useValue: this._adminUsersHttpService
                }
            ],
            parent: this._injector
        });
        
        const addEditUserModal = this._ngbModal.open(AdminUsersAddEditModalComponent, {
            windowClass: 'fullscreen-modal transparent',
            backdropClass: 'fullscreen-modal-backdrop',
            keyboard: false,
            injector: injector
        });
        if (user)
            addEditUserModal.componentInstance.user = user;
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(x => x.unsubscribe());
    }
}