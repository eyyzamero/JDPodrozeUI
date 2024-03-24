import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormDiscountPriceComponent } from './admin-excursions-form-discount-price.component';

describe('AdminExcursionsFormDiscountPriceComponent', () => {
  let component: AdminExcursionsFormDiscountPriceComponent;
  let fixture: ComponentFixture<AdminExcursionsFormDiscountPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminExcursionsFormDiscountPriceComponent]
    });
    fixture = TestBed.createComponent(AdminExcursionsFormDiscountPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
