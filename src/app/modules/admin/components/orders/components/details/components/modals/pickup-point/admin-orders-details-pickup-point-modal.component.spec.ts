import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersDetailsPickupPointModalComponent } from './admin-orders-details-pickup-point-modal.component';

describe('AdminOrdersDetailsPickupPointModalComponent', () => {
    let component: AdminOrdersDetailsPickupPointModalComponent;
    let fixture: ComponentFixture<AdminOrdersDetailsPickupPointModalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AdminOrdersDetailsPickupPointModalComponent]
        });
        fixture = TestBed.createComponent(AdminOrdersDetailsPickupPointModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});