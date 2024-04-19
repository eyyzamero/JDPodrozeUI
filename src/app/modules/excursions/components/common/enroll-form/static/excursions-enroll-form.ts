import { Directive } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { PaymentMethod } from "src/app/core/enums";

@Directive()
export class ExcursionsEnrollForm {

    static getEnrollForm(): FormGroup {
        const form = new FormGroup({
            excursionId: new FormControl(undefined),
            booker: this.getBookerForm(),
            participants: new FormArray([]),
            paymentMethod: new FormControl(PaymentMethod.TRADITIONAL_TRANSFER)
        });
        return form;
    }

    static getBookerForm(): FormGroup {
        const form = new FormGroup({
            name: new FormControl('', [
                Validators.required,
                Validators.maxLength(50)
            ]),
            surname: new FormControl('', [
                Validators.required,
                Validators.maxLength(50)
            ]),
            email: new FormControl('', [
                Validators.required,
                Validators.email,
                Validators.maxLength(150)
            ]),
            telephone: new FormControl('', [
                Validators.required,
                Validators.pattern('^((\\+48)|48)?\\d{7,9}$')
            ]),
            birthDate: new FormControl(null, [
                Validators.required
            ]),
            discount: new FormControl(false, [
                Validators.required
            ]),
        });
        return form;
    }

    static getParticipantForm(): FormGroup {
        const form = new FormGroup({
            name: new FormControl('', [
                Validators.required,
                Validators.maxLength(50)
            ]),
            surname: new FormControl('', [
                Validators.required,
                Validators.maxLength(50)
            ]),
            birthDate: new FormControl(null, [
                Validators.required
            ]),
            discount: new FormControl(false, [
                Validators.required
            ])
        });
        return form;
    }
} 