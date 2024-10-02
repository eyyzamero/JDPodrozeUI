import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRegisterEmailFieldComponent } from './account-register-email-field.component';

describe('AccountRegisterEmailFieldComponent', () => {
    let component: AccountRegisterEmailFieldComponent;
    let fixture: ComponentFixture<AccountRegisterEmailFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AccountRegisterEmailFieldComponent]
        });
        fixture = TestBed.createComponent(AccountRegisterEmailFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});