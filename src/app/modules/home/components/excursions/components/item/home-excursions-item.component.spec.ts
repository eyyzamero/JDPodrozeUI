import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExcursionsItemComponent } from './home-excursions-item.component';

describe('HomeExcursionsItemComponent', () => {
  let component: HomeExcursionsItemComponent;
  let fixture: ComponentFixture<HomeExcursionsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeExcursionsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeExcursionsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
