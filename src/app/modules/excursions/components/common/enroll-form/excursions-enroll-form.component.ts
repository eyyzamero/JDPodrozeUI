import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExcursionsEnrollForm } from './static';
import { ExcursionsEnrollFormModule } from './excursions-enroll-form.module';
import { ExcursionsEnrollFormBookerComponent } from './components/booker/excursions-enroll-form-booker.component';
import { ExcursionsEnrollFormBase } from './base';
import { SelectComponent } from 'src/app/modules/common/select/select.component';
import { ISelectOptionModel, SelectOptionModel } from 'src/app/modules/common/select/models';
import { ExcursionsEnrollFormParticipantComponent } from './components/participant/excursions-enroll-form-participant.component';
import { LoadingSpinnerModule } from 'src/app/modules/common/loading-spinner/loading-spinner.module';

@Component({
    selector: 'app-excursions-enroll-form',
    templateUrl: './excursions-enroll-form.component.html',
    styleUrls: ['./excursions-enroll-form.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ExcursionsEnrollFormBookerComponent,
        ExcursionsEnrollFormParticipantComponent,
        ExcursionsEnrollFormModule,
        SelectComponent,
        LoadingSpinnerModule
    ]
})
export class ExcursionsEnrollFormComponent extends ExcursionsEnrollFormBase implements OnInit {

    @Input() form: FormGroup = ExcursionsEnrollForm.getEnrollForm();
    @Input() discount: boolean = false;

    participantCountCurrent: ISelectOptionModel<number> = new SelectOptionModel('1', 1);
    participantCountOptions: ISelectOptionModel<number>[] = [
        new SelectOptionModel('1', 1),
        new SelectOptionModel('2', 2),
        new SelectOptionModel('3', 3),
        new SelectOptionModel('4', 4),
        new SelectOptionModel('5', 5),
        new SelectOptionModel('6', 6),
        new SelectOptionModel('7', 7),
        new SelectOptionModel('8', 8),
        new SelectOptionModel('9', 9),
        new SelectOptionModel('10', 10)
    ];
    participantCountFormatter = (item: ISelectOptionModel<number>) => item?.key;

    constructor() {
        super();
    }

    ngOnInit(): void {

    }

    getControlAsFormGroup(controlName: string): FormGroup {
        const formGroup = this.form.controls[controlName] as FormGroup;
        return formGroup;
    }

    getControlAsArrayOfFormGroup(controlName: string): Array<FormGroup> {
        const formGroupArray = this.form.controls[controlName] as FormArray;
        const formArrayControls = formGroupArray.controls as FormGroup[];
        return formArrayControls;
    }

    onParticipantCountChange(item: ISelectOptionModel<number>) {
        this.participantCountCurrent = item;
        let participantsFormGroupArray = this.getControlAsArrayOfFormGroup('participants');

        const count = item.value - 1;
        const participantsFormGroupArrayLength = participantsFormGroupArray.length;

        if (count > participantsFormGroupArray.length) 
            for (let i = 0; i < count - participantsFormGroupArrayLength; i++) 
                participantsFormGroupArray.push(ExcursionsEnrollForm.getParticipantForm());
        else if (participantsFormGroupArrayLength > count) 
            participantsFormGroupArray.splice(count === 0 ? 0 : count, participantsFormGroupArrayLength - count);
    }
}