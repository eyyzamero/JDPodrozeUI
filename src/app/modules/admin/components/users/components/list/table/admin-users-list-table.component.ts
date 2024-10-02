import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAdminUsersListUserModel } from '../../../models';

@Component({
    selector: 'app-admin-users-list-table',
    templateUrl: './admin-users-list-table.component.html',
    styleUrls: ['./admin-users-list-table.component.scss']
})
export class AdminUsersListTableComponent {

    @Input() users?: IAdminUsersListUserModel[] = [];
    @Output() edit: EventEmitter<IAdminUsersListUserModel> = new EventEmitter<IAdminUsersListUserModel>();
    @Output() delete: EventEmitter<number> = new EventEmitter<number>();
    
    constructor() { }
}