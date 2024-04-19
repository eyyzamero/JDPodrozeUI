import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormParticipantNameComponent } from './excursions-enroll-form-participant-name.component';

describe('ExcursionsEnrollFormParticipantNameComponent', () => {
  let component: ExcursionsEnrollFormParticipantNameComponent;
  let fixture: ComponentFixture<ExcursionsEnrollFormParticipantNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcursionsEnrollFormParticipantNameComponent]
    });
    fixture = TestBed.createComponent(ExcursionsEnrollFormParticipantNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
