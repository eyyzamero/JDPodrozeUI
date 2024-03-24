import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormDiscountComponent } from './admin-excursions-form-discount.component';

describe('AdminExcursionsFormDiscountComponent', () => {
  let component: AdminExcursionsFormDiscountComponent;
  let fixture: ComponentFixture<AdminExcursionsFormDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminExcursionsFormDiscountComponent]
    });
    fixture = TestBed.createComponent(AdminExcursionsFormDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
