import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-account-register-first-name-field',
    templateUrl: './account-register-first-name-field.component.html',
    styleUrls: ['./account-register-first-name-field.component.scss']
})
export class AccountRegisterFirstNameFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}