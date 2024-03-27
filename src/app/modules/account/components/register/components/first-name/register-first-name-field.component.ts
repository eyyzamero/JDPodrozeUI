import { Component, Injector, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-register-first-name-field',
    templateUrl: './register-first-name-field.component.html',
    styleUrls: ['./register-first-name-field.component.scss'],
    providers: [
        {
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RegisterFirstNameFieldComponent),
			multi: true
		}
    ]
})
export class RegisterFirstNameFieldComponent extends FormFieldBase<string> {

    constructor(injector: Injector) {
        super(injector);
    }
}