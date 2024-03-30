import { ChangeDetectionStrategy, Component, Injector, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-admin-excursions-form-price',
    templateUrl: './admin-excursions-form-price.component.html',
    styleUrls: ['./admin-excursions-form-price.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => AdminExcursionsFormPriceComponent),
			multi: true
		}
	]
})
export class AdminExcursionsFormPriceComponent extends FormFieldBase<number> {

    constructor(
        readonly injector: Injector
    ) {
        super(injector);
    }
}