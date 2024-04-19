import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersDetailsEnrollModalComponent } from './admin-orders-details-enroll-modal.component';

describe('AdminOrdersDetailsEnrollModalComponent', () => {
    let component: AdminOrdersDetailsEnrollModalComponent;
    let fixture: ComponentFixture<AdminOrdersDetailsEnrollModalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminOrdersDetailsEnrollModalComponent]
        });
        fixture = TestBed.createComponent(AdminOrdersDetailsEnrollModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});