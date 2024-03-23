import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPasswordFieldComponent } from './login-password-field.component';

describe('LoginPasswordFieldComponent', () => {
    let component: LoginPasswordFieldComponent;
    let fixture: ComponentFixture<LoginPasswordFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginPasswordFieldComponent]
        });
        fixture = TestBed.createComponent(LoginPasswordFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});