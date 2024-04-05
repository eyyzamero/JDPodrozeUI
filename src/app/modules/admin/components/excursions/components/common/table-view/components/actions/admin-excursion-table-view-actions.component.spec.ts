import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionTableViewActionsComponent } from './admin-excursion-table-view-actions.component';

describe('AdminExcursionTableViewActionsComponent', () => {
    let component: AdminExcursionTableViewActionsComponent;
    let fixture: ComponentFixture<AdminExcursionTableViewActionsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminExcursionTableViewActionsComponent]
        });
        fixture = TestBed.createComponent(AdminExcursionTableViewActionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});