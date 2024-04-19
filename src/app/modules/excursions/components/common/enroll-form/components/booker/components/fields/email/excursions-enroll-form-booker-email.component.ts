import { Component } from '@angular/core';
import { ExcursionsEnrollFormFieldBase } from '../../../../../base';

@Component({
    selector: 'app-excursions-enroll-form-booker-email',
    templateUrl: './excursions-enroll-form-booker-email.component.html',
    styleUrls: ['./excursions-enroll-form-booker-email.component.scss']
})
export class ExcursionsEnrollFormBookerEmailComponent extends ExcursionsEnrollFormFieldBase {

    constructor() {
        super();
    }
}