import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-account-register-login-field',
    templateUrl: './account-register-login-field.component.html',
    styleUrls: ['./account-register-login-field.component.scss']
})
export class AccountRegisterLoginFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}