import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-register-password-field',
    templateUrl: './register-password-field.component.html',
    styleUrls: ['./register-password-field.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterPasswordFieldComponent {

    @Input({ required: true }) control!: FormControl<string>;

    constructor() { }
}