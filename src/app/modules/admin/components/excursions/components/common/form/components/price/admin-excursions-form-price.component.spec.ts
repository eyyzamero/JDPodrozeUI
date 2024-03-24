import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormPriceComponent } from './admin-excursions-form-price.component';

describe('AdminExcursionsFormPriceComponent', () => {
  let component: AdminExcursionsFormPriceComponent;
  let fixture: ComponentFixture<AdminExcursionsFormPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminExcursionsFormPriceComponent]
    });
    fixture = TestBed.createComponent(AdminExcursionsFormPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
