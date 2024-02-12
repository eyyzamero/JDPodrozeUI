import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuChevronComponent } from './menu-chevron.component';

describe('MenuChevronComponent', () => {
  let component: MenuChevronComponent;
  let fixture: ComponentFixture<MenuChevronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuChevronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuChevronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
