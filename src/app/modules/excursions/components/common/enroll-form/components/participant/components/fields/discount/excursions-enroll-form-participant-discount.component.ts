import { Component } from '@angular/core';
import { ExcursionsEnrollFormFieldBase } from '../../../../../base';

@Component({
    selector: 'app-excursions-enroll-form-participant-discount',
    templateUrl: './excursions-enroll-form-participant-discount.component.html',
    styleUrls: ['./excursions-enroll-form-participant-discount.component.scss']
})
export class ExcursionsEnrollFormParticipantDiscountComponent extends ExcursionsEnrollFormFieldBase {

    constructor() {
        super();
    }
}