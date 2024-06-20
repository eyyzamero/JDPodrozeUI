import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-register-first-name-field',
    templateUrl: './register-first-name-field.component.html',
    styleUrls: ['./register-first-name-field.component.scss']
})
export class RegisterFirstNameFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}