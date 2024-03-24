import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsFormInCarouselComponent } from './admin-excursions-form-in-carousel.component';

describe('AdminExcursionsFormInCarouselComponent', () => {
  let component: AdminExcursionsFormInCarouselComponent;
  let fixture: ComponentFixture<AdminExcursionsFormInCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminExcursionsFormInCarouselComponent]
    });
    fixture = TestBed.createComponent(AdminExcursionsFormInCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
