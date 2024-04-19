import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersDetailsComponent } from './admin-orders-details.component';

describe('AdminOrdersDetailsComponent', () => {
    let component: AdminOrdersDetailsComponent;
    let fixture: ComponentFixture<AdminOrdersDetailsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AdminOrdersDetailsComponent]
        });
        fixture = TestBed.createComponent(AdminOrdersDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});