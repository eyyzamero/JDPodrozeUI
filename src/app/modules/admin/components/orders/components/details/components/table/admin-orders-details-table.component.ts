import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAdminOrdersExcursionDetailsOrderModel, IAdminOrdersExcursionDetailsParticipantModel } from '../../../../models';
import { Color, LoadingState, PaymentMethod, PaymentStatus } from 'src/app/core/enums';

@Component({
    selector: 'app-admin-orders-details-table',
    templateUrl: './admin-orders-details-table.component.html',
    styleUrls: ['./admin-orders-details-table.component.scss']
})
export class AdminOrdersDetailsTableComponent {

    @Input() orders?: IAdminOrdersExcursionDetailsOrderModel[];
    @Input() statusLoadingState: LoadingState = LoadingState.LOADED;
    @Input() actionButtonsDisabled: boolean = false;

    @Output() changeStatus: EventEmitter<IAdminOrdersExcursionDetailsOrderModel> = new EventEmitter<IAdminOrdersExcursionDetailsOrderModel>();
    @Output() edit: EventEmitter<{ participant: IAdminOrdersExcursionDetailsParticipantModel, order: IAdminOrdersExcursionDetailsOrderModel }> = new EventEmitter<{ participant: IAdminOrdersExcursionDetailsParticipantModel, order: IAdminOrdersExcursionDetailsOrderModel }>();
    @Output() delete: EventEmitter<IAdminOrdersExcursionDetailsParticipantModel> = new EventEmitter<IAdminOrdersExcursionDetailsParticipantModel>();
    @Output() addParticipant: EventEmitter<IAdminOrdersExcursionDetailsOrderModel> = new EventEmitter<IAdminOrdersExcursionDetailsOrderModel>();
    
    readonly PaymentMethod = PaymentMethod;
    readonly PaymentStatus = PaymentStatus;
    readonly Color = Color;
    readonly LoadingState = LoadingState;

    constructor() { }
}