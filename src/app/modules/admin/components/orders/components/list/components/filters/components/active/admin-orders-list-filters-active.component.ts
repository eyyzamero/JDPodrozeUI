import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectOptionModel, SelectOptionModel } from 'src/app/modules/common/select/models';
import { SelectComponent } from 'src/app/modules/common/select/select.component';
import { AdminOrdersListFiltersActiveOptions } from '../../enums';

@Component({
    selector: 'app-admin-orders-list-filters-active',
    templateUrl: './admin-orders-list-filters-active.component.html',
    styleUrls: ['./admin-orders-list-filters-active.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        SelectComponent
    ]
})
export class AdminOrdersListFiltersActiveComponent {

    @Input() set active(value: AdminOrdersListFiltersActiveOptions) {
        this.current = this.options.find(option => option.value === value)!;
    }

    current: ISelectOptionModel<AdminOrdersListFiltersActiveOptions> = new SelectOptionModel('Wszystkie', AdminOrdersListFiltersActiveOptions.ALL);
    options: ISelectOptionModel<AdminOrdersListFiltersActiveOptions>[] = [
        new SelectOptionModel('Wszystkie', AdminOrdersListFiltersActiveOptions.ALL),
        new SelectOptionModel('Aktywne', AdminOrdersListFiltersActiveOptions.ACTIVE),
        new SelectOptionModel('Nieaktywne', AdminOrdersListFiltersActiveOptions.INACTIVE),
        new SelectOptionModel('Zarchiwizowane', AdminOrdersListFiltersActiveOptions.ARCHIVED)
    ];

    formatter = (item: ISelectOptionModel<AdminOrdersListFiltersActiveOptions>) => item?.key; 

    @Output() onFilter: EventEmitter<AdminOrdersListFiltersActiveOptions> = new EventEmitter<AdminOrdersListFiltersActiveOptions>();

    constructor() { }
}