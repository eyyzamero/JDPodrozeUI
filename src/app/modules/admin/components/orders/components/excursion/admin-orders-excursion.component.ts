import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdminOrdersExcursionModel, IAdminOrdersExcursionModel } from '../../models';

@Component({
	selector: 'app-admin-orders-excursion',
	templateUrl: './admin-orders-excursion.component.html',
	styleUrls: ['./admin-orders-excursion.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminOrdersExcursionComponent {

	@Input() excursion: IAdminOrdersExcursionModel = new AdminOrdersExcursionModel();

	isCollapsed: boolean = true;

	constructor() { }
}