import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ContextType } from 'src/app/core/enums';

@Component({
    selector: 'app-admin-excursion-table-view-actions',
    templateUrl: './admin-excursion-table-view-actions.component.html',
    styleUrls: ['./admin-excursion-table-view-actions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminExcursionTableViewActionsComponent {

    @Input() context: ContextType = ContextType.NONE;
    @Input() buttonsEnabled: boolean = false;

    @Output() edit: EventEmitter<void> = new EventEmitter<void>();
    @Output() delete: EventEmitter<void> = new EventEmitter<void>();
    @Output() template: EventEmitter<void> = new EventEmitter<void>();
    @Output() details: EventEmitter<void> = new EventEmitter<void>();

    readonly ContextType = ContextType;

    constructor() { }

    shouldDisplayAction(contexts: ContextType[]) {
        const result = contexts.includes(this.context);
        return result;
    }
}