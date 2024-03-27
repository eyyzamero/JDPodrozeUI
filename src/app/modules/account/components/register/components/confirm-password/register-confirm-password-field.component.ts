import { Component, Injector, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-register-confirm-password-field',
    templateUrl: './register-confirm-password-field.component.html',
    styleUrls: ['./register-confirm-password-field.component.scss'],
    providers: [
        {
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RegisterConfirmPasswordFieldComponent),
			multi: true
		}
    ]
})
export class RegisterConfirmPasswordFieldComponent extends FormFieldBase<string> {

    constructor(injector: Injector) {
        super(injector);
    }
}