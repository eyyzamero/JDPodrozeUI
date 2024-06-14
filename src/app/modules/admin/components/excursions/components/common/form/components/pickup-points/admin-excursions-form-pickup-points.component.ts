import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormControl } from '@angular/forms';
import { ExcursionPickupPointModel, IExcursionPickupPointModel } from 'src/app/modules/excursions/models';

@Component({
    selector: 'app-admin-excursions-form-pickup-points',
    templateUrl: './admin-excursions-form-pickup-points.component.html',
    styleUrls: ['./admin-excursions-form-pickup-points.component.scss']
})
export class AdminExcursionsFormPickupPointsComponent {

    @Input({ required: true }) control!: FormArray<AbstractControl<ExcursionPickupPointModel>>;

    addBtnDisabled: boolean = true;

    constructor() { }

    add(input: HTMLInputElement): void {
        if (input.value && input.value.length <= 50) {
            const control = new FormControl<IExcursionPickupPointModel>(
                new ExcursionPickupPointModel(
                    undefined,
                    input.value
                )
            );
            this.control.push(control as FormControl<IExcursionPickupPointModel>);
            input.value = '';
            this.addBtnDisabled = true;
        };
    }

    onInput(value: string): void {
        this.addBtnDisabled = !value || value.length > 50;
    }

    delete(index: number): void {
        this.control.removeAt(index);
    }
}