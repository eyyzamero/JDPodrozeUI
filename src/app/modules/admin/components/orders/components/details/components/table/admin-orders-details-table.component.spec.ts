import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersDetailsTableComponent } from './admin-orders-details-table.component';

describe('AdminOrdersDetailsTableComponent', () => {
    let component: AdminOrdersDetailsTableComponent;
    let fixture: ComponentFixture<AdminOrdersDetailsTableComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminOrdersDetailsTableComponent]
        });
        fixture = TestBed.createComponent(AdminOrdersDetailsTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});