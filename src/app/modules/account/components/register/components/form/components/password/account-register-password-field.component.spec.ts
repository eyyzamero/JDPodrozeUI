import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRegisterPasswordFieldComponent } from './account-register-password-field.component';

describe('AccountRegisterPasswordFieldComponent', () => {
    let component: AccountRegisterPasswordFieldComponent;
    let fixture: ComponentFixture<AccountRegisterPasswordFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AccountRegisterPasswordFieldComponent]
        });
        fixture = TestBed.createComponent(AccountRegisterPasswordFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});