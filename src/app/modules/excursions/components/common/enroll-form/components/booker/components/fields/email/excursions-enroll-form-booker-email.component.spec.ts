import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormBookerEmailComponent } from './excursions-enroll-form-booker-email.component';

describe('ExcursionsEnrollFormBookerEmailComponent', () => {
    let component: ExcursionsEnrollFormBookerEmailComponent;
    let fixture: ComponentFixture<ExcursionsEnrollFormBookerEmailComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExcursionsEnrollFormBookerEmailComponent]
        });
        fixture = TestBed.createComponent(ExcursionsEnrollFormBookerEmailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});