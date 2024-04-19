import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersDetailsExcursionInfoComponent } from './admin-orders-details-excursion-info.component';

describe('AdminOrdersDetailsExcursionInfoComponent', () => {
    let component: AdminOrdersDetailsExcursionInfoComponent;
    let fixture: ComponentFixture<AdminOrdersDetailsExcursionInfoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AdminOrdersDetailsExcursionInfoComponent]
        });
        fixture = TestBed.createComponent(AdminOrdersDetailsExcursionInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});