import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormMode } from 'src/app/core/enums';
import { ToastsService } from 'src/app/core/services/common/toasts/toasts.service';
import { AdminExcursionsFormModule } from './admin-excursions-form.module';
import { IExcursionImageModel, IExcursionPickupPointModel } from 'src/app/modules/excursions/models';

@Component({
    selector: 'app-admin-excursions-form-common',
    templateUrl: './admin-excursions-form.component.html',
    styleUrls: ['./admin-excursions-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        AdminExcursionsFormModule,
        ReactiveFormsModule
    ]
})
export class AdminExcursionsFormCommonComponent {
    
    @Input() mode: FormMode = FormMode.NEW;

    @Input() form?: FormGroup;
    @Input() submitButtonDisabled: boolean = false;
	
    @Output() submit: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    get images(): FormArray {
		return this.form!.get('images') as FormArray<AbstractControl<IExcursionImageModel>>;
	}

    get pickupPoints(): FormArray {
        return this.form!.get('pickupPoints') as FormArray<AbstractControl<IExcursionPickupPointModel>>;
    }

    constructor(
        private readonly _toastsService: ToastsService
    ) { }

    onFormSubmit(): void {
        if (!this.submitButtonDisabled) {
            this.form?.markAllAsTouched();
            this.form?.updateValueAndValidity();
            this.form?.valid
                ? this.submit.emit(this.form)
                : this._toastsService.show('W formularzu znajduje się co najmniej jeden błąd', 'toast-error');
        }
    }

    getFormControl(formControlName: string) {
        const control = this.form!.controls[formControlName];
        return control as FormControl;
    }
}