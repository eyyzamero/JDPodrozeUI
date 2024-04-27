import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollSuccessComponent } from './excursions-enroll-success.component';

describe('ExcursionsEnrollSuccessComponent', () => {
    let component: ExcursionsEnrollSuccessComponent;
    let fixture: ComponentFixture<ExcursionsEnrollSuccessComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ExcursionsEnrollSuccessComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ExcursionsEnrollSuccessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});