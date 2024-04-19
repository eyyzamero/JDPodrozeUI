import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormParticipantDiscountComponent } from './excursions-enroll-form-participant-discount.component';

describe('ExcursionsEnrollFormParticipantDiscountComponent', () => {
    let component: ExcursionsEnrollFormParticipantDiscountComponent;
    let fixture: ComponentFixture<ExcursionsEnrollFormParticipantDiscountComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExcursionsEnrollFormParticipantDiscountComponent]
        });
        fixture = TestBed.createComponent(ExcursionsEnrollFormParticipantDiscountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});