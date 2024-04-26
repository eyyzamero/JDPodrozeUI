import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAdminOrdersExcursionDetailsParticipantModel } from 'src/app/modules/admin/components/orders/models';

@Component({
    selector: 'app-admin-orders-participants-item',
    templateUrl: './admin-orders-participants-item.component.html',
    styleUrls: ['./admin-orders-participants-item.component.scss']
})
export class AdminOrdersParticipantComponent {

    @Input() participant?: IAdminOrdersExcursionDetailsParticipantModel;
    @Input() controls: boolean = false;
    @Input() actionButtonsDisabled: boolean = false;

    @Output() edit: EventEmitter<IAdminOrdersExcursionDetailsParticipantModel> = new EventEmitter<IAdminOrdersExcursionDetailsParticipantModel>();
    @Output() delete: EventEmitter<IAdminOrdersExcursionDetailsParticipantModel> = new EventEmitter<IAdminOrdersExcursionDetailsParticipantModel>();
    
    constructor() { }
}