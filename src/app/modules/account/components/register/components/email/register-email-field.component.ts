import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-register-email-field',
    templateUrl: './register-email-field.component.html',
    styleUrls: ['./register-email-field.component.scss']
})
export class RegisterEmailFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}