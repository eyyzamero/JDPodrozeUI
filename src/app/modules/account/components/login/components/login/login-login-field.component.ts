import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-login-login-field',
    templateUrl: './login-login-field.component.html',
    styleUrls: ['./login-login-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginLoginFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}