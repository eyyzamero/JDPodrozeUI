import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAdminOrdersExcursionDetailsModel, IAdminOrdersExcursionDetailsOrderModel } from '../../models';
import { LoadingState, PaymentStatus } from 'src/app/core/enums';
import { AdminOrdersHttpService } from '../../services/http/admin-orders-http.service';
import { filter, map, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { AdminOrdersDetailsModule } from './admin-orders-details.module';
import { IOrdersChangePaymentStatusReq, OrdersChangePaymentStatusReq } from 'src/app/core/contracts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminOrdersDetailsEnrollModalComponent } from './components/modals/enroll/admin-orders-details-enroll-modal.component';

@Component({
    selector: 'app-admin-orders-details',
    templateUrl: './admin-orders-details.component.html',
    styleUrls: ['./admin-orders-details.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        LoadingSpinnerModule,
        AdminOrdersDetailsModule
    ]
})
export class AdminOrdersDetailsComponent implements OnInit {

    details: WritableSignal<IAdminOrdersExcursionDetailsModel | undefined> = signal(undefined);
    state: WritableSignal<LoadingState> = signal(LoadingState.LOADING);
    statusLoadingState: WritableSignal<LoadingState> = signal(LoadingState.LOADED);

    readonly LoadingState = LoadingState;

    constructor(
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _ngbModal: NgbModal,
        private readonly _adminOrdersHttpService: AdminOrdersHttpService
    ) { }

    ngOnInit(): void {
        this._initSubscriptions();
    }

    private _initSubscriptions(): void {
        this._activatedRoute.params.pipe(
            filter(params => params['excursionId'] && !isNaN(params['excursionId'])),
            map(params => +params['excursionId']),
            take(1)
        ).subscribe({
            next: (excursionId) => this._getData(excursionId)
        });
    }

    private _getData(excursionId: number): void {
        this._adminOrdersHttpService.getExcursionOrdersWithDetailsObservable(excursionId).pipe(
            take(1)
        ).subscribe({
            next: (value) => {
                this.state.set(LoadingState.LOADED);
                this.details.set(value);
            },
            error: () => this.state.set(LoadingState.ERROR)
        });
    }

    changeStatus(order: IAdminOrdersExcursionDetailsOrderModel): void {
		if (this.statusLoadingState() === LoadingState.LOADED) {
			const paymentStatus = order.paymentStatus === PaymentStatus.NOT_PAID ? PaymentStatus.PAID : PaymentStatus.NOT_PAID;
			const request: IOrdersChangePaymentStatusReq = new OrdersChangePaymentStatusReq(paymentStatus);
			this.statusLoadingState.set(LoadingState.LOADING);
            this._adminOrdersHttpService.changePaymentStatusObservable(order.id, request).pipe(
                take(1)
            ).subscribe({
                next: () => {
                    order.paymentStatus = paymentStatus;
                    this.statusLoadingState.set(LoadingState.LOADED);
                },
                error: () => this.statusLoadingState.set(LoadingState.ERROR)
            })
		};
	}

    enroll(): void {
        const excursionId = this.details()!.excursion.id
        const enrollModal = this._ngbModal.open(AdminOrdersDetailsEnrollModalComponent, {
            windowClass: 'fullscreen-modal transparent',
            backdropClass: 'fullscreen-modal-backdrop'
        });
        enrollModal.componentInstance.excursionId = excursionId;
        enrollModal.result.then(result => {
            if (result === true)
                this._getData(excursionId);     
        });
    }
}