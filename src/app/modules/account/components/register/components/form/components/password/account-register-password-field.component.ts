import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-account-register-password-field',
    templateUrl: './account-register-password-field.component.html',
    styleUrls: ['./account-register-password-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountRegisterPasswordFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}