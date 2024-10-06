import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AdminExcursionsTableViewModule } from './admin-excursions-table-view.module';
import { IExcursionModel } from 'src/app/modules/excursions/models';
import { ContextType } from 'src/app/core/enums';
import { AdminExcursionsSortType } from '../../../enums';

@Component({
    selector: 'app-admin-excursions-table-view',
    templateUrl: './admin-excursions-table-view.component.html',
    styleUrls: ['./admin-excursions-table-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        AdminExcursionsTableViewModule
    ]
})
export class AdminExcursionsTableViewComponent {

    @Input({ required: true }) excursions: IExcursionModel[] = []; 
    @Input() context: ContextType = ContextType.NONE;
    @Input() buttonsEnabled: boolean = false;
    @Input() sorting: boolean = false;
    @Input() sortCurrent: AdminExcursionsSortType = AdminExcursionsSortType.NONE;
    @Input() columns: (keyof IExcursionModel)[] = [];

    @Output() add: EventEmitter<number> = new EventEmitter<number>();
    @Output() edit: EventEmitter<number> = new EventEmitter<number>();
    @Output() delete: EventEmitter<number> = new EventEmitter<number>();
    @Output() template: EventEmitter<number> = new EventEmitter<number>();
    @Output() details: EventEmitter<number> = new EventEmitter<number>();
    @Output() sort: EventEmitter<AdminExcursionsSortType> = new EventEmitter<AdminExcursionsSortType>();

    readonly ContextType = ContextType;
    readonly AdminExcursionsSortType = AdminExcursionsSortType;

    constructor() { }

    onSort(type: AdminExcursionsSortType): void {
        if (this.sorting)
            this.sort.emit(type);
    }

    shouldDisplayColumn(column: keyof IExcursionModel): boolean {
        const result = this.columns.includes(column);
        return result;
    }
}