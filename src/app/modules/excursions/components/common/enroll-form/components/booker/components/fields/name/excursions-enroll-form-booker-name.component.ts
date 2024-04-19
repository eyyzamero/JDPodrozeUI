import { Component } from '@angular/core';
import { ExcursionsEnrollFormFieldBase } from '../../../../../base';

@Component({
    selector: 'app-excursions-enroll-form-booker-name',
    templateUrl: './excursions-enroll-form-booker-name.component.html',
    styleUrls: ['./excursions-enroll-form-booker-name.component.scss']
})
export class ExcursionsEnrollFormBookerNameComponent extends ExcursionsEnrollFormFieldBase  {

    constructor() {
        super();
    }
}