import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersListFiltersActiveComponent } from './admin-orders-list-filters-active.component';

describe('AdminOrdersListFiltersActiveComponent', () => {
  let component: AdminOrdersListFiltersActiveComponent;
  let fixture: ComponentFixture<AdminOrdersListFiltersActiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrdersListFiltersActiveComponent]
    });
    fixture = TestBed.createComponent(AdminOrdersListFiltersActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
