import { ChangeDetectionStrategy, Component, Injector, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-login-password-field',
    templateUrl: './login-password-field.component.html',
    styleUrls: ['./login-password-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LoginPasswordFieldComponent),
            multi: true
        }
    ]
})
export class LoginPasswordFieldComponent extends FormFieldBase<string> {

    constructor(injector: Injector) {
        super(injector);
    }
}