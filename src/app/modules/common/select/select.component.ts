import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectOptionModel } from './models';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        NgbDropdownModule
    ]
})
export class SelectComponent {

    @Input() collapsed: boolean = true;
    @Input() disabled: boolean = false;
    @Input() label: string = '';

    @Input() formatter?: (item: any) => string;
    @Input() current?: ISelectOptionModel<any>;
    @Input() options: ISelectOptionModel<any>[] = [];

    @Output() selected: EventEmitter<ISelectOptionModel<any>> = new EventEmitter<ISelectOptionModel<any>>();

    opened: boolean = false;

    constructor() { }
}