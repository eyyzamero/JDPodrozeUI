import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectOptionModel, SelectOptionModel } from 'src/app/modules/common/select/models';

@Component({
    selector: 'app-admin-excursions-table-filters-active',
    templateUrl: './admin-excursions-table-filters-active.component.html',
    styleUrls: ['./admin-excursions-table-filters-active.component.scss']
})
export class AdminExcursionsTableFiltersActiveComponent {

    @Input() set active(value: boolean | null) {
        this.current = this.options.find(option => option.value === value)!;
    }

    current: ISelectOptionModel<boolean | null> = new SelectOptionModel('Wszystkie', null);
    options: ISelectOptionModel<boolean | null>[] = [
        new SelectOptionModel('Wszystkie', null),
        new SelectOptionModel('Aktywne', true),
        new SelectOptionModel('Nieaktywne', false)
    ];

    formatter = (item: ISelectOptionModel<boolean | null>) => item?.key; 

    @Output() onFilter: EventEmitter<boolean | null> = new EventEmitter<boolean | null>();

    constructor() { }
}