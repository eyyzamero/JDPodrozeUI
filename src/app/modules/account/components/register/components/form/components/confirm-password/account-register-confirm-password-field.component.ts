import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-account-register-confirm-password-field',
    templateUrl: './account-register-confirm-password-field.component.html',
    styleUrls: ['./account-register-confirm-password-field.component.scss']
})
export class AccountRegisterConfirmPasswordFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}