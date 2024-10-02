import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-account-register-last-name-field',
    templateUrl: './account-register-last-name-field.component.html',
    styleUrls: ['./account-register-last-name-field.component.scss']
})
export class AccountRegisterLastNameFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}
