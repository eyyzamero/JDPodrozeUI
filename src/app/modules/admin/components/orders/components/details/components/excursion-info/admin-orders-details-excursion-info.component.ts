import { Component, Input } from '@angular/core';
import { AdminOrdersExcursionDetailsExcursionModel } from '../../../../models';

@Component({
    selector: 'app-admin-orders-details-excursion-info',
    templateUrl: './admin-orders-details-excursion-info.component.html',
    styleUrls: ['./admin-orders-details-excursion-info.component.scss']
})
export class AdminOrdersDetailsExcursionInfoComponent {

    @Input() excursion?: AdminOrdersExcursionDetailsExcursionModel;

    constructor() { }
}