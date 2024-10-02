import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-account-register-email-field',
    templateUrl: './account-register-email-field.component.html',
    styleUrls: ['./account-register-email-field.component.scss']
})
export class AccountRegisterEmailFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}