import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormSurnameComponent } from './excursions-enroll-form-surname.component';

describe('ExcursionsEnrollFormSurnameComponent', () => {
  let component: ExcursionsEnrollFormSurnameComponent;
  let fixture: ComponentFixture<ExcursionsEnrollFormSurnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcursionsEnrollFormSurnameComponent]
    });
    fixture = TestBed.createComponent(ExcursionsEnrollFormSurnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
