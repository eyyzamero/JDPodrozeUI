import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcursionsEnrollFormBookerModule } from './excursions-enroll-form-booker.module';
import { ExcursionsEnrollFormBase } from '../../base';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ExcursionsEnrollForm } from '../../static';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFormatterService } from 'src/app/core/formatters/ngb-date/ngb-date-formatter.service';

@Component({
    selector: 'app-excursions-enroll-form-booker',
    templateUrl: './excursions-enroll-form-booker.component.html',
    styleUrls: ['./excursions-enroll-form-booker.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ExcursionsEnrollFormBookerModule
    ],
    providers: [
        {
            provide: NgbDateParserFormatter,
            useClass: NgbDateFormatterService
        }
    ]
})
export class ExcursionsEnrollFormBookerComponent extends ExcursionsEnrollFormBase {

    @Input({ required: true }) override form: FormGroup = ExcursionsEnrollForm.getBookerForm();
    @Input() discount: boolean = false;
    
    constructor() {
        super();
    }
}