import { ChangeDetectionStrategy, Component, Injector, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-admin-excursions-form-checkbox',
    templateUrl: './admin-excursions-form-checkbox.component.html',
    styleUrls: ['./admin-excursions-form-checkbox.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AdminExcursionsFormCheckboxComponent),
            multi: true
        }
    ]
})
export class AdminExcursionsFormCheckboxComponent extends FormFieldBase<boolean> {

    @Input() id: string = '';
    @Input() label: string = '';

    constructor(
        readonly injector: Injector
    ) {
        super(injector)
    }
}