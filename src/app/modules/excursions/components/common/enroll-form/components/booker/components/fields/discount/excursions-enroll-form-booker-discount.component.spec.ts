import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormBookerDiscountComponent } from './excursions-enroll-form-booker-discount.component';

describe('ExcursionsEnrollFormBookerDiscountComponent', () => {
    let component: ExcursionsEnrollFormBookerDiscountComponent;
    let fixture: ComponentFixture<ExcursionsEnrollFormBookerDiscountComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExcursionsEnrollFormBookerDiscountComponent]
        });
        fixture = TestBed.createComponent(ExcursionsEnrollFormBookerDiscountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});