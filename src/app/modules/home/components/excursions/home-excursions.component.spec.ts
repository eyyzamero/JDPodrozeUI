import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExcursionsComponent } from './home-excursions.component';

describe('HomeExcursionsComponent', () => {
  let component: HomeExcursionsComponent;
  let fixture: ComponentFixture<HomeExcursionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeExcursionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeExcursionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
