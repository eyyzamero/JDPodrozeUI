import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginLoginFieldComponent } from './login-login-field.component';

describe('LoginLoginFieldComponent', () => {
    let component: LoginLoginFieldComponent;
    let fixture: ComponentFixture<LoginLoginFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginLoginFieldComponent]
        });
        fixture = TestBed.createComponent(LoginLoginFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});