import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRegisterLoginFieldComponent } from './account-register-login-field.component';

describe('AccountRegisterLoginFieldComponent', () => {
    let component: AccountRegisterLoginFieldComponent;
    let fixture: ComponentFixture<AccountRegisterLoginFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AccountRegisterLoginFieldComponent]
        });
        fixture = TestBed.createComponent(AccountRegisterLoginFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});