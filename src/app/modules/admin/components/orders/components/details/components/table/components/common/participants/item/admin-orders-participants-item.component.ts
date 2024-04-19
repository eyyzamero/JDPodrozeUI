import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAdminOrdersExcursionDetailsParticipantModel } from 'src/app/modules/admin/components/orders/models';

@Component({
    selector: 'app-admin-orders-participants-item',
    templateUrl: './admin-orders-participants-item.component.html',
    styleUrls: ['./admin-orders-participants-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminOrdersParticipantComponent {

    @Input() participant?: IAdminOrdersExcursionDetailsParticipantModel;
    @Input() controls: boolean = false;

    constructor() { }
}