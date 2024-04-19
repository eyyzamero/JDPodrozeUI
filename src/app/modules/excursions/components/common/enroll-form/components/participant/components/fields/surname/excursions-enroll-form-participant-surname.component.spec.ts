import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormParticipantSurnameComponent } from './excursions-enroll-form-participant-surname.component';

describe('ExcursionsEnrollFormParticipantSurnameComponent', () => {
  let component: ExcursionsEnrollFormParticipantSurnameComponent;
  let fixture: ComponentFixture<ExcursionsEnrollFormParticipantSurnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcursionsEnrollFormParticipantSurnameComponent]
    });
    fixture = TestBed.createComponent(ExcursionsEnrollFormParticipantSurnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
