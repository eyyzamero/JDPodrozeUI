import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRegisterLastNameFieldComponent } from './account-register-last-name-field.component';

describe('AccountRegisterLastNameFieldComponent', () => {
    let component: AccountRegisterLastNameFieldComponent;
    let fixture: ComponentFixture<AccountRegisterLastNameFieldComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AccountRegisterLastNameFieldComponent]
        });
        fixture = TestBed.createComponent(AccountRegisterLastNameFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});