import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcursionsEnrollFormParticipantNameComponent } from './components/fields/name/excursions-enroll-form-participant-name.component';
import { ExcursionsEnrollFormParticipantSurnameComponent } from './components/fields/surname/excursions-enroll-form-participant-surname.component';
import { ExcursionsEnrollFormParticipantBirthDateComponent } from './components/fields/birth-date/excursions-enroll-form-participant-birth-date.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcursionsEnrollFormParticipantDiscountComponent } from './components/fields/discount/excursions-enroll-form-participant-discount.component';

@NgModule({
    declarations: [
        ExcursionsEnrollFormParticipantNameComponent,
        ExcursionsEnrollFormParticipantSurnameComponent,
        ExcursionsEnrollFormParticipantBirthDateComponent,
        ExcursionsEnrollFormParticipantDiscountComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbDatepickerModule
    ],
    exports: [
        ExcursionsEnrollFormParticipantNameComponent,
        ExcursionsEnrollFormParticipantSurnameComponent,
        ExcursionsEnrollFormParticipantBirthDateComponent,
        ExcursionsEnrollFormParticipantDiscountComponent
    ]
})
export class ExcursionsEnrollFormParticipantModule { }