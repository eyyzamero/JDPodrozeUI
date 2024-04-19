import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionsEnrollFormPaymentMethodComponent } from './excursions-enroll-form-payment-method.component';

describe('ExcursionsEnrollFormPaymentMethodComponent', () => {
  let component: ExcursionsEnrollFormPaymentMethodComponent;
  let fixture: ComponentFixture<ExcursionsEnrollFormPaymentMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcursionsEnrollFormPaymentMethodComponent]
    });
    fixture = TestBed.createComponent(ExcursionsEnrollFormPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
