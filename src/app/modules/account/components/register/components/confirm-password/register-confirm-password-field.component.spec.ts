import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterConfirmPasswordFieldComponent } from './register-confirm-password-field.component';

describe('RegisterConfirmPasswordFieldComponent', () => {
    let component: RegisterConfirmPasswordFieldComponent;
    let fixture: ComponentFixture<RegisterConfirmPasswordFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RegisterConfirmPasswordFieldComponent]
        });
        fixture = TestBed.createComponent(RegisterConfirmPasswordFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});