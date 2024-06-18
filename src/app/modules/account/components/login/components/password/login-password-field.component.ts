import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-login-password-field',
    templateUrl: './login-password-field.component.html',
    styleUrls: ['./login-password-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPasswordFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}