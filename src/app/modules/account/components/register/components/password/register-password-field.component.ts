import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-register-password-field',
    templateUrl: './register-password-field.component.html',
    styleUrls: ['./register-password-field.component.scss'],
    providers: [
        {
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RegisterPasswordFieldComponent),
			multi: true
		}
    ]
})
export class RegisterPasswordFieldComponent extends FormFieldBase<string> {

    constructor() {
        super();
    }
}