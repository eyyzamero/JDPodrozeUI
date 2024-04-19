import { NgModule } from "@angular/core";
import { ExcursionsEnrollFormBookerBirthDateComponent } from "./components/fields/birth-date/excursions-enroll-form-booker-birth-date.component";
import { ExcursionsEnrollFormBookerEmailComponent } from "./components/fields/email/excursions-enroll-form-booker-email.component";
import { ExcursionsEnrollFormBookerNameComponent } from "./components/fields/name/excursions-enroll-form-booker-name.component";
import { CommonModule } from "@angular/common";
import { ExcursionsEnrollFormBookerSurnameComponent } from "./components/fields/surname/excursions-enroll-form-booker-surname.component";
import { ExcursionsEnrollFormBookerTelephoneComponent } from "./components/fields/telephone/excursions-enroll-form-booker-telephone.component";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { ExcursionsEnrollFormBookerDiscountComponent } from './components/fields/discount/excursions-enroll-form-booker-discount.component';

@NgModule({
    declarations: [
        ExcursionsEnrollFormBookerBirthDateComponent,
        ExcursionsEnrollFormBookerEmailComponent,
        ExcursionsEnrollFormBookerNameComponent,
        ExcursionsEnrollFormBookerSurnameComponent,
        ExcursionsEnrollFormBookerTelephoneComponent,
        ExcursionsEnrollFormBookerDiscountComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbDatepickerModule
    ],
    exports: [
        ExcursionsEnrollFormBookerBirthDateComponent,
        ExcursionsEnrollFormBookerEmailComponent,
        ExcursionsEnrollFormBookerNameComponent,
        ExcursionsEnrollFormBookerSurnameComponent,
        ExcursionsEnrollFormBookerTelephoneComponent,
        ExcursionsEnrollFormBookerDiscountComponent
    ]
})
export class ExcursionsEnrollFormBookerModule { }