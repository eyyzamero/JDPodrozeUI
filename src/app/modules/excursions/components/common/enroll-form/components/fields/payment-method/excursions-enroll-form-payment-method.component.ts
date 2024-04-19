import { Component, WritableSignal, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaymentMethod } from 'src/app/core/enums';

@Component({
    selector: 'app-excursions-enroll-form-payment-method',
    templateUrl: './excursions-enroll-form-payment-method.component.html',
    styleUrls: ['./excursions-enroll-form-payment-method.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ExcursionsEnrollFormPaymentMethodComponent),
            multi: true
        }
    ]
})
export class ExcursionsEnrollFormPaymentMethodComponent implements ControlValueAccessor {

    value: WritableSignal<PaymentMethod> = signal(PaymentMethod.TRADITIONAL_TRANSFER);
    isDisabled: WritableSignal<boolean> = signal(false);

    readonly PaymentMethod = PaymentMethod;

    onTouched!: () => void;
    onChange!: (value: PaymentMethod) => void;

    constructor() { }

    writeValue(value: PaymentMethod): void {
        this.value.set(value);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled.set(isDisabled);
    }

    updateValue(value: PaymentMethod): void {
        this.value.set(value);
        this.onChange(value);
    }
}