import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAdminOrdersExcursionDetailsExcursionModel, IAdminOrdersExcursionDetailsModel, IAdminOrdersExcursionDetailsOrderModel, IAdminOrdersExcursionDetailsParticipantModel } from '../../models';
import { LoadingState, PaymentStatus } from 'src/app/core/enums';
import { AdminOrdersHttpService } from '../../services/http/admin-orders-http.service';
import { Subscription, filter, map, take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { AdminOrdersDetailsModule } from './admin-orders-details.module';
import { IOrdersChangePaymentStatusReq, OrdersChangePaymentStatusReq } from 'src/app/core/contracts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminOrdersDetailsEnrollModalComponent } from './components/modals/enroll/admin-orders-details-enroll-modal.component';
import { AdminOrdersDetailsDataService } from '../../services/data/details/admin-orders-details-data.service';
import { AdminOrdersDetailsParticipantModalComponent } from './components/modals/participant/admin-orders-details-participant-modal.component';
import { AdminOrdersDetailsBookerModalComponent } from './components/modals/booker/admin-orders-details-booker-modal.component';
import { AdminOrdersDetailsPickupPointModalComponent } from './components/modals/pickup-point/admin-orders-details-pickup-point-modal.component';

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

    details: IAdminOrdersExcursionDetailsModel | undefined = undefined;
    excursion: IAdminOrdersExcursionDetailsExcursionModel | undefined = undefined;
    state: LoadingState = LoadingState.LOADING;
    statusLoadingState: LoadingState = LoadingState.LOADED;
    actionButtonsDisabled: boolean = true;

    readonly LoadingState = LoadingState;

    private _subscriptions: Subscription[] = [];

    constructor(
        private readonly _activatedRoute: ActivatedRoute,
        private readonly _ngbModal: NgbModal,
        private readonly _adminOrdersHttpService: AdminOrdersHttpService,
        private readonly _adminOrdersDetailsDataService: AdminOrdersDetailsDataService
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
        this._subscriptions.push(
            this._adminOrdersDetailsDataService.observable.subscribe({
                next: (value) => {
                    this.state = value.state;
                    this.details = value.data;
                    this.statusLoadingState = LoadingState.LOADED;
                    this.actionButtonsDisabled = false;
                    this._ngbModal.dismissAll();
                }
            })
        )
    }

    private _getData(excursionId: number): void {
        this._adminOrdersHttpService.getExcursionOrdersWithDetails(excursionId);
    }

    changeStatus(order: IAdminOrdersExcursionDetailsOrderModel): void {
		if (this.statusLoadingState === LoadingState.LOADED) {
			const paymentStatus = order.paymentStatus === PaymentStatus.NOT_PAID ? PaymentStatus.PAID : PaymentStatus.NOT_PAID;
			const request: IOrdersChangePaymentStatusReq = new OrdersChangePaymentStatusReq(paymentStatus);
			this.statusLoadingState = LoadingState.LOADING;
            this._adminOrdersHttpService.changePaymentStatus(order.id, request);            
		};
	}

    addParticipant(order: IAdminOrdersExcursionDetailsOrderModel): void {
        const addParticipantModal = this._ngbModal.open(AdminOrdersDetailsParticipantModalComponent, {
            windowClass: 'fullscreen-modal transparent',
            backdropClass: 'fullscreen-modal-backdrop',
            keyboard: false
        });
        addParticipantModal.componentInstance.order = order;
        addParticipantModal.componentInstance.discount = (this.details?.excursion.discountPriceGross ?? 0) > 0;
    }

    edit(payload: { participant: IAdminOrdersExcursionDetailsParticipantModel, order: IAdminOrdersExcursionDetailsOrderModel }): void {
        const editParticipantModal = this._ngbModal.open(!payload.participant.bookerId ? AdminOrdersDetailsBookerModalComponent : AdminOrdersDetailsParticipantModalComponent, {
            windowClass: 'fullscreen-modal transparent',
            backdropClass: 'fullscreen-modal-backdrop',
            keyboard: false
        });
        editParticipantModal.componentInstance.order = payload.order;
        editParticipantModal.componentInstance.participant = payload.participant;
        editParticipantModal.componentInstance.discount = (this.details?.excursion.discountPriceGross ?? 0) > 0;
    }

    enroll(): void {
        const excursionId = this.details!.excursion.id
        const enrollModal = this._ngbModal.open(AdminOrdersDetailsEnrollModalComponent, {
            windowClass: 'fullscreen-modal transparent',
            backdropClass: 'fullscreen-modal-backdrop',
            keyboard: false
        });
        enrollModal.componentInstance.excursionId = excursionId;
        enrollModal.componentInstance.discount = (this.details?.excursion.discountPriceGross ?? 0) > 0;
        
        enrollModal.result.then(result => {
            if (result === true)
                this._getData(excursionId);     
        });
    }

    deleteParticipant(participant: IAdminOrdersExcursionDetailsParticipantModel): void {
        this.actionButtonsDisabled = true;
        this._adminOrdersHttpService.deleteParticipant(participant.id);
    }

    setPickupPoint(order: IAdminOrdersExcursionDetailsOrderModel): void {
        const setPickupPointModal = this._ngbModal.open(AdminOrdersDetailsPickupPointModalComponent, {
            windowClass: 'fullscreen-modal transparent',
            backdropClass: 'fullscreen-modal-backdrop',
            keyboard: false
        });
        setPickupPointModal.componentInstance.orderId = order.id;
        setPickupPointModal.componentInstance.pickupPointId = order.pickupPoint?.id;
        setPickupPointModal.componentInstance.pickupPoints = this.details?.excursion?.pickupPoints;
    }
}