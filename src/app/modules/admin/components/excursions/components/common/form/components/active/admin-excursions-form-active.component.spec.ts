import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormActiveComponent } from './admin-excursions-form-active.component';

describe('AdminExcursionsFormActiveComponent', () => {
  let component: AdminExcursionsFormActiveComponent;
  let fixture: ComponentFixture<AdminExcursionsFormActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminExcursionsFormActiveComponent]
    });
    fixture = TestBed.createComponent(AdminExcursionsFormActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
