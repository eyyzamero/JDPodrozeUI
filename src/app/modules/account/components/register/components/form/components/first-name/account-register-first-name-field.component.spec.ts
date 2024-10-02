import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRegisterFirstNameFieldComponent } from './account-register-first-name-field.component';

describe('AccountRegisterFirstNameFieldComponent', () => {
    let component: AccountRegisterFirstNameFieldComponent;
    let fixture: ComponentFixture<AccountRegisterFirstNameFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AccountRegisterFirstNameFieldComponent]
        });
        fixture = TestBed.createComponent(AccountRegisterFirstNameFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});