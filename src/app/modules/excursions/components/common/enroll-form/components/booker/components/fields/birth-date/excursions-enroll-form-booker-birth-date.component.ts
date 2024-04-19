import { Component } from '@angular/core';
import { ExcursionsEnrollFormFieldBase } from '../../../../../base';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFormatterService } from 'src/app/core/formatters/ngb-date/ngb-date-formatter.service';

@Component({
    selector: 'app-excursions-enroll-form-booker-birth-date',
    templateUrl: './excursions-enroll-form-booker-birth-date.component.html',
    styleUrls: ['./excursions-enroll-form-booker-birth-date.component.scss']
})
export class ExcursionsEnrollFormBookerBirthDateComponent extends ExcursionsEnrollFormFieldBase {

    minDate = new NgbDate(new Date().getFullYear() - 100, 1, 1);
    maxDate = new NgbDate(new Date().getFullYear() - 3, new Date().getMonth() + 1, new Date().getDate())

    constructor(
        private _ngbDateFormatterService: NgbDateFormatterService
    ) {
        super();
    }

    format(date: NgbDateStruct | null): string {
        return this._ngbDateFormatterService.format(date);
    }
}