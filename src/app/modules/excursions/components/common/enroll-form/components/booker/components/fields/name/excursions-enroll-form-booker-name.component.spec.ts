import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormBookerNameComponent } from './excursions-enroll-form-booker-name.component';

describe('ExcursionsEnrollFormBookerNameComponent', () => {
    let component: ExcursionsEnrollFormBookerNameComponent;
    let fixture: ComponentFixture<ExcursionsEnrollFormBookerNameComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExcursionsEnrollFormBookerNameComponent]
        });
        fixture = TestBed.createComponent(ExcursionsEnrollFormBookerNameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});