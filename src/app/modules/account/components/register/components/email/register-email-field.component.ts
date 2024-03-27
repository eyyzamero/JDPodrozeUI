import { Component, Injector, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-register-email-field',
    templateUrl: './register-email-field.component.html',
    styleUrls: ['./register-email-field.component.scss'],
    providers: [
        {
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RegisterEmailFieldComponent),
			multi: true
		}
    ]
})
export class RegisterEmailFieldComponent extends FormFieldBase<string> {

    constructor(injector: Injector) {
        super(injector);
    }
}