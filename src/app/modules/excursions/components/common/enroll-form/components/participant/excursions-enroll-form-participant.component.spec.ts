import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormParticipantComponent } from './excursions-enroll-form-participant.component';

describe('ExcursionsEnrollFormParticipantComponent', () => {
    let component: ExcursionsEnrollFormParticipantComponent;
    let fixture: ComponentFixture<ExcursionsEnrollFormParticipantComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ExcursionsEnrollFormParticipantComponent]
        });
        fixture = TestBed.createComponent(ExcursionsEnrollFormParticipantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});