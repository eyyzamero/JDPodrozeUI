import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-register-last-name-field',
    templateUrl: './register-last-name-field.component.html',
    styleUrls: ['./register-last-name-field.component.scss'],
    providers: [
        {
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RegisterLastNameFieldComponent),
			multi: true
		}
    ]
})
export class RegisterLastNameFieldComponent extends FormFieldBase<string> {

    constructor() {
        super();
    }
}
