import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormBookerTelephoneComponent } from './excursions-enroll-form-booker-telephone.component';

describe('ExcursionsEnrollFormBookerTelephoneComponent', () => {
    let component: ExcursionsEnrollFormBookerTelephoneComponent;
    let fixture: ComponentFixture<ExcursionsEnrollFormBookerTelephoneComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExcursionsEnrollFormBookerTelephoneComponent]
        });
        fixture = TestBed.createComponent(ExcursionsEnrollFormBookerTelephoneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});