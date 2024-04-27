import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollShowcaseComponent } from './excursions-enroll-showcase.component';

describe('ExcursionsEnrollShowcaseComponent', () => {
    let component: ExcursionsEnrollShowcaseComponent;
    let fixture: ComponentFixture<ExcursionsEnrollShowcaseComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExcursionsEnrollShowcaseComponent]
        });
        fixture = TestBed.createComponent(ExcursionsEnrollShowcaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});