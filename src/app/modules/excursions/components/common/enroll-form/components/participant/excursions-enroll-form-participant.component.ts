import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcursionsEnrollFormParticipantModule } from './excursions-enroll-form-participant.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExcursionsEnrollFormBase } from '../../base';
import { ExcursionsEnrollForm } from '../../static';

@Component({
    selector: 'app-excursions-enroll-form-participant',
    templateUrl: './excursions-enroll-form-participant.component.html',
    styleUrls: ['./excursions-enroll-form-participant.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ExcursionsEnrollFormParticipantModule
    ],
})
export class ExcursionsEnrollFormParticipantComponent extends ExcursionsEnrollFormBase {

    @Input({ required: true }) override form: FormGroup = ExcursionsEnrollForm.getParticipantForm();
    @Input() discount: boolean = false;
    @Input() index?: number;
    
    constructor() {
        super();
    }
}