import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormShortDescriptionComponent } from './admin-excursions-form-short-description.component';

describe('AdminExcursionsFormShortDescriptionComponent', () => {
  let component: AdminExcursionsFormShortDescriptionComponent;
  let fixture: ComponentFixture<AdminExcursionsFormShortDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminExcursionsFormShortDescriptionComponent]
    });
    fixture = TestBed.createComponent(AdminExcursionsFormShortDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
