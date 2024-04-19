import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormParticipantBirthDateComponent } from './excursions-enroll-form-participant-birth-date.component';

describe('ExcursionsEnrollFormParticipantBirthDateComponent', () => {
  let component: ExcursionsEnrollFormParticipantBirthDateComponent;
  let fixture: ComponentFixture<ExcursionsEnrollFormParticipantBirthDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcursionsEnrollFormParticipantBirthDateComponent]
    });
    fixture = TestBed.createComponent(ExcursionsEnrollFormParticipantBirthDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
