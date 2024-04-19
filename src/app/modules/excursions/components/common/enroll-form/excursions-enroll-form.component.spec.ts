import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormComponent } from './excursions-enroll-form.component';

describe('ExcursionsEnrollFormComponent', () => {
    let component: ExcursionsEnrollFormComponent;
    let fixture: ComponentFixture<ExcursionsEnrollFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ExcursionsEnrollFormComponent]
        });
        fixture = TestBed.createComponent(ExcursionsEnrollFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});