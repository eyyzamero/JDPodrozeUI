import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IAdminUsersListUserModel } from '../../../models';

@Component({
    selector: 'app-admin-users-list-table',
    templateUrl: './admin-users-list-table.component.html',
    styleUrls: ['./admin-users-list-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminUsersListTableComponent {

    @Input() users?: IAdminUsersListUserModel[] = [];

    constructor() { }
}