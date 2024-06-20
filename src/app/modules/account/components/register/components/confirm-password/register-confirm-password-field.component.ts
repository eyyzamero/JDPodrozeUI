import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-register-confirm-password-field',
    templateUrl: './register-confirm-password-field.component.html',
    styleUrls: ['./register-confirm-password-field.component.scss']
})
export class RegisterConfirmPasswordFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}