import { ChangeDetectionStrategy, Component, Injector, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-admin-excursions-form-discount-price',
    templateUrl: './admin-excursions-form-discount-price.component.html',
    styleUrls: ['./admin-excursions-form-discount-price.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AdminExcursionsFormDiscountPriceComponent),
            multi: true
        }
    ]
})
export class AdminExcursionsFormDiscountPriceComponent extends FormFieldBase<number> {

    constructor(
        readonly injector: Injector
    ) {
        super(injector);
    }
}