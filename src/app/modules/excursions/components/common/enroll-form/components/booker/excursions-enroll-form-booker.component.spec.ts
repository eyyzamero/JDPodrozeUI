import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormBookerComponent } from './excursions-enroll-form-booker.component';

describe('ExcursionsEnrollFormBookerComponent', () => {
    let component: ExcursionsEnrollFormBookerComponent;
    let fixture: ComponentFixture<ExcursionsEnrollFormBookerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ExcursionsEnrollFormBookerComponent]
        });
        fixture = TestBed.createComponent(ExcursionsEnrollFormBookerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});