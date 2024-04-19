import { Component } from '@angular/core';
import { ExcursionsEnrollFormFieldBase } from '../../../../../base';

@Component({
    selector: 'app-excursions-enroll-form-participant-name',
    templateUrl: './excursions-enroll-form-participant-name.component.html',
    styleUrls: ['./excursions-enroll-form-participant-name.component.scss']
})
export class ExcursionsEnrollFormParticipantNameComponent extends ExcursionsEnrollFormFieldBase {

    constructor() {
        super();
    }
}