import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLoginFieldComponent } from './register-login-field.component';

describe('RegisterLoginFieldComponent', () => {
    let component: RegisterLoginFieldComponent;
    let fixture: ComponentFixture<RegisterLoginFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterLoginFieldComponent]
        });
        fixture = TestBed.createComponent(RegisterLoginFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});