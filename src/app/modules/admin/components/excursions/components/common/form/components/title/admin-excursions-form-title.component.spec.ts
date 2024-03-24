import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormTitleComponent } from './admin-excursions-form-title.component';

describe('AdminExcursionsFormTitleComponent', () => {
  let component: AdminExcursionsFormTitleComponent;
  let fixture: ComponentFixture<AdminExcursionsFormTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminExcursionsFormTitleComponent]
    });
    fixture = TestBed.createComponent(AdminExcursionsFormTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
