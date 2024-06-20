import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-register-login-field',
    templateUrl: './register-login-field.component.html',
    styleUrls: ['./register-login-field.component.scss']
})
export class RegisterLoginFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}