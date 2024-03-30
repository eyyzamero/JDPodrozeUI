import { ChangeDetectionStrategy, Component, Injector, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-admin-excursions-form-short-description',
    templateUrl: './admin-excursions-form-short-description.component.html',
    styleUrls: ['./admin-excursions-form-short-description.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => AdminExcursionsFormShortDescriptionComponent),
			multi: true
		}
	]
})
export class AdminExcursionsFormShortDescriptionComponent extends FormFieldBase<string> {

    constructor(
        readonly injector: Injector
    ) {
        super(injector);
    }
}