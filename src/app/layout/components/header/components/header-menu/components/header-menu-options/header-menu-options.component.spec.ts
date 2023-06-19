import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenuOptionsComponent } from './header-menu-options.component';

describe('HeaderMenuOptionsComponent', () => {
  let component: HeaderMenuOptionsComponent;
  let fixture: ComponentFixture<HeaderMenuOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenuOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMenuOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
