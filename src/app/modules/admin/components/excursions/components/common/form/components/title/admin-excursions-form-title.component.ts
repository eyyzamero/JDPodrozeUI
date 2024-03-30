import { ChangeDetectionStrategy, Component, Injector, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldBase } from 'src/app/core/forms';

@Component({
    selector: 'app-admin-excursions-form-title',
    templateUrl: './admin-excursions-form-title.component.html',
    styleUrls: ['./admin-excursions-form-title.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => AdminExcursionsFormTitleComponent),
			multi: true
		}
	]
})
export class AdminExcursionsFormTitleComponent extends FormFieldBase<string> {

    constructor(
        readonly injector: Injector
    ) {
        super(injector);
    }
}