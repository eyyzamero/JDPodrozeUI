import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdminOrdersExcursionOrderParticipantModel, IAdminOrdersExcursionOrderParticipantModel } from 'src/app/modules/admin/components/orders/models';

@Component({
	selector: 'app-admin-orders-excursion-order-participant',
	templateUrl: './admin-orders-excursion-order-participant.component.html',
	styleUrls: ['./admin-orders-excursion-order-participant.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminOrdersExcursionOrderParticipantComponent {

	@Input() participant: IAdminOrdersExcursionOrderParticipantModel = new AdminOrdersExcursionOrderParticipantModel();
	@Input() minified: boolean = false;

	constructor() { }
}