import { Component } from '@angular/core';
import { ExcursionsEnrollFormFieldBase } from '../../../../../base';

@Component({
    selector: 'app-excursions-enroll-form-participant-surname',
    templateUrl: './excursions-enroll-form-participant-surname.component.html',
    styleUrls: ['./excursions-enroll-form-participant-surname.component.scss']
})
export class ExcursionsEnrollFormParticipantSurnameComponent extends ExcursionsEnrollFormFieldBase {

    constructor() {
        super();
    }
}