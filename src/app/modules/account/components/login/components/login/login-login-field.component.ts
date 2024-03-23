import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-login-login-field',
    templateUrl: './login-login-field.component.html',
    styleUrls: ['./login-login-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => LoginLoginFieldComponent),
			multi: true
		}
    ]
})
export class LoginLoginFieldComponent extends FormFieldBase<string> {

    constructor() {
        super();
    }
}