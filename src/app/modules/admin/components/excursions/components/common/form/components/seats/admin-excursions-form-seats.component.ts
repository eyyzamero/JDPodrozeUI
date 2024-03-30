import { ChangeDetectionStrategy, Component, Injector, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-admin-excursions-form-seats',
    templateUrl: './admin-excursions-form-seats.component.html',
    styleUrls: ['./admin-excursions-form-seats.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AdminExcursionsFormSeatsComponent),
            multi: true
        }
    ]
})
export class AdminExcursionsFormSeatsComponent extends FormFieldBase<number> {

    constructor(
        readonly injector: Injector
    ) {
        super(injector);
    }
}