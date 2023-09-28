import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcursionsTableComponent } from './admin-excursions-table.component';

describe('AdminExcursionsTableComponent', () => {
  let component: AdminExcursionsTableComponent;
  let fixture: ComponentFixture<AdminExcursionsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminExcursionsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminExcursionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
