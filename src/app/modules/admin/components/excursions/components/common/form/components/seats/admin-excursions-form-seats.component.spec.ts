import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormSeatsComponent } from './admin-excursions-form-seats.component';

describe('AdminExcursionsFormSeatsComponent', () => {
  let component: AdminExcursionsFormSeatsComponent;
  let fixture: ComponentFixture<AdminExcursionsFormSeatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminExcursionsFormSeatsComponent]
    });
    fixture = TestBed.createComponent(AdminExcursionsFormSeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
