import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-register-last-name-field',
    templateUrl: './register-last-name-field.component.html',
    styleUrls: ['./register-last-name-field.component.scss']
})
export class RegisterLastNameFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}
