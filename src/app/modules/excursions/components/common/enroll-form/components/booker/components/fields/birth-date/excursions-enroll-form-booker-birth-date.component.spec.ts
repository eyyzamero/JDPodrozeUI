import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormBookerBirthDateComponent } from './excursions-enroll-form-booker-birth-date.component';

describe('ExcursionsEnrollFormBookerBirthDateComponent', () => {
    let component: ExcursionsEnrollFormBookerBirthDateComponent;
    let fixture: ComponentFixture<ExcursionsEnrollFormBookerBirthDateComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExcursionsEnrollFormBookerBirthDateComponent]
        });
        fixture = TestBed.createComponent(ExcursionsEnrollFormBookerBirthDateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});