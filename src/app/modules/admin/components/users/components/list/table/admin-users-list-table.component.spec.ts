import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersListTableComponent } from './admin-users-list-table.component';

describe('AdminUsersListTableComponent', () => {
    let component: AdminUsersListTableComponent;
    let fixture: ComponentFixture<AdminUsersListTableComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminUsersListTableComponent]
        });
        fixture = TestBed.createComponent(AdminUsersListTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});