import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-register-login-field',
    templateUrl: './register-login-field.component.html',
    styleUrls: ['./register-login-field.component.scss'],
    providers: [
        {
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RegisterLoginFieldComponent),
			multi: true
		}
    ]
})
export class RegisterLoginFieldComponent extends FormFieldBase<string> {

    constructor() {
        super();
    }
}