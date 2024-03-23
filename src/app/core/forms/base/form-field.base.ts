import { Directive, Input, WritableSignal, signal } from "@angular/core";
import { ControlValueAccessor, FormControl } from "@angular/forms";

@Directive()
export abstract class FormFieldBase<TType> implements ControlValueAccessor {

    @Input({ required: true }) formControl!: FormControl<TType>;

    get touched(): boolean {
        const result = this.formControl.touched;
        return result;
    }

    get errorKey(): string | undefined {
        const result = this.formControl.errors === null ? undefined : Object.keys(this.formControl.errors)[0];
        return result;
    }

    value: WritableSignal<TType | undefined> = signal(undefined);
    isDisabled: WritableSignal<boolean> = signal(false);

    onTouched!: () => void;
    onChange!: (value: TType) => void;
    
    constructor() { }

    writeValue(value: TType): void {
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

    updateValue(value: TType): void {
        this.value.set(value);
        this.onChange(value);
    }
}