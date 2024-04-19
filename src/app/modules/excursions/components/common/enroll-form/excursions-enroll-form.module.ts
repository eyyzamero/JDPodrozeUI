import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExcursionsEnrollFormPaymentMethodComponent } from './components/fields/payment-method/excursions-enroll-form-payment-method.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ExcursionsEnrollFormPaymentMethodComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        ExcursionsEnrollFormPaymentMethodComponent
    ]
})
export class ExcursionsEnrollFormModule { }