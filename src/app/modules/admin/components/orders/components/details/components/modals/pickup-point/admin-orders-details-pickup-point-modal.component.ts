import { Component, Input, signal, WritableSignal } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Color, LoadingState } from 'src/app/core/enums';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';
import { AdminOrdersHttpService } from '../../../../../services/http/admin-orders-http.service';
import { OrderSetPickupPointReq } from 'src/app/core/contracts';
import { AdminOrdersDetailsDataService } from '../../../../../services/data/details/admin-orders-details-data.service';
import { IAdminOrdersExcursionDetailsExcursionPickupPointModel } from '../../../../../models';
import { SelectComponent } from 'src/app/modules/common/select/select.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-admin-orders-details-pickup-point-modal',
    templateUrl: './admin-orders-details-pickup-point-modal.component.html',
    styleUrls: ['./admin-orders-details-pickup-point-modal.component.scss'],
    standalone: true,
    imports: [
        LoadingSpinnerModule,
        SelectComponent,
        NgIf,
        NgFor
    ]
})
export class AdminOrdersDetailsPickupPointModalComponent {

    @Input() orderId: string = '';
    @Input() pickupPointId?: string;
    @Input() set pickupPoints(value: IAdminOrdersExcursionDetailsExcursionPickupPointModel[]) {
        this._pickupPoints = value;
        
        if (this.pickupPointId)
            this.selectedPickupPoint = this._pickupPoints.find(x => x.id === this.pickupPointId);
    }
    get pickupPoints(): IAdminOrdersExcursionDetailsExcursionPickupPointModel[] {
        return this._pickupPoints;
    }

    loadingState: WritableSignal<LoadingState> = signal(LoadingState.LOADED);
    selectedPickupPoint?: IAdminOrdersExcursionDetailsExcursionPickupPointModel;

    private _pickupPoints: IAdminOrdersExcursionDetailsExcursionPickupPointModel[] = [];

    readonly LoadingState = LoadingState;
    readonly Color = Color;

    constructor(
        private readonly _ngbActiveModal: NgbActiveModal,
        private readonly _adminOrdersHttpService: AdminOrdersHttpService,
        private readonly _adminOrdersDetailsDataService: AdminOrdersDetailsDataService
    ) { }

    onCancel(): void {
        this._ngbActiveModal.close(false);
    }

    onSubmit(): void {
        const request = new OrderSetPickupPointReq(this.orderId, this.selectedPickupPoint?.id);
        if (request.orderId && request.pickupPointId) {
            this.loadingState.set(LoadingState.LOADING);
            this._adminOrdersHttpService.setPickupPointObservable(request).subscribe({
                next: () => {
                    this._adminOrdersDetailsDataService.setPickupPoint(request.orderId, request.pickupPointId);
                    this._ngbActiveModal.close(true);
                },
                error: () => {
                    this.loadingState.set(LoadingState.LOADED);
                }
            });
        };
    }

    onPickupPointChange(pickupPoint: IAdminOrdersExcursionDetailsExcursionPickupPointModel): void {
        this.selectedPickupPoint = pickupPoint;
    }
}