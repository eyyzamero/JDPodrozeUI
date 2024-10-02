import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersAddEditModalComponent } from './admin-users-add-edit-modal.component';

describe('AdminUsersAddEditModalComponent', () => {
    let component: AdminUsersAddEditModalComponent;
    let fixture: ComponentFixture<AdminUsersAddEditModalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AdminUsersAddEditModalComponent]
        });
        fixture = TestBed.createComponent(AdminUsersAddEditModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});