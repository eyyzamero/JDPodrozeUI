import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, WritableSignal, signal } from '@angular/core';
import { IAdminOrdersExcursionDetailsOrderModel, IAdminOrdersExcursionDetailsParticipantModel } from '../../../../models';
import { Color, LoadingState, PaymentMethod, PaymentStatus } from 'src/app/core/enums';
import { AdminOrdersHttpService } from '../../../../services/http/admin-orders-http.service';
import { take } from 'rxjs';

@Component({
    selector: 'app-admin-orders-details-table',
    templateUrl: './admin-orders-details-table.component.html',
    styleUrls: ['./admin-orders-details-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminOrdersDetailsTableComponent {

    @Input() orders?: IAdminOrdersExcursionDetailsOrderModel[];
    @Input() statusLoadingState: LoadingState = LoadingState.LOADED;
    @Input() actionButtonsDisabled: WritableSignal<boolean> = signal(false);

    @Output() changeStatus: EventEmitter<IAdminOrdersExcursionDetailsOrderModel> = new EventEmitter<IAdminOrdersExcursionDetailsOrderModel>();

    readonly PaymentMethod = PaymentMethod;
    readonly PaymentStatus = PaymentStatus;
    readonly Color = Color;
    readonly LoadingState = LoadingState;

    constructor(
        private readonly _adminOrdersHttpService: AdminOrdersHttpService
    ) { }

    deleteParticipant(participant: IAdminOrdersExcursionDetailsParticipantModel, order: IAdminOrdersExcursionDetailsOrderModel): void {
        this.actionButtonsDisabled.set(true);
        this._adminOrdersHttpService.deleteParticipantObservable(participant.id).pipe(
            take(1)
        ).subscribe({
            next: () => {
                if (!participant.bookerId) {
                    const orderIndex = this.orders?.findIndex(x => x.id === order.id);
                    orderIndex !== undefined && orderIndex !== - 1 ? this.orders?.splice(orderIndex, 1) : null;
                } else {
                    const participantIndex = order.participants.findIndex(x => x.id === participant.id);
                    participantIndex !== -1 ? order.participants.splice(participantIndex, 1) : null;
                }
                this.actionButtonsDisabled.set(false);
            },
            error: () => this.actionButtonsDisabled.set(false)
        });
    }
}