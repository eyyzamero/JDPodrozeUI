import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersDetailsBookerModalComponent } from './admin-orders-details-booker-modal.component';

describe('AdminOrdersDetailsBookerModalComponent', () => {
    let component: AdminOrdersDetailsBookerModalComponent;
    let fixture: ComponentFixture<AdminOrdersDetailsBookerModalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AdminOrdersDetailsBookerModalComponent]
        });
        fixture = TestBed.createComponent(AdminOrdersDetailsBookerModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});