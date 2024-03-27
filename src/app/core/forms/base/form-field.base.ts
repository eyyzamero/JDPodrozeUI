import { Directive, Injector, WritableSignal, signal } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Directive()
export abstract class FormFieldBase<TType> implements ControlValueAccessor {

    get touched(): boolean {
        const result = this._control?.touched ?? false;
        return result;
    }

    get errorKey(): string | undefined {
        const result = !this._control?.errors ? undefined : Object.keys(this._control.errors)[0];
        return result;
    }

    value: WritableSignal<TType | undefined> = signal(undefined);
    isDisabled: WritableSignal<boolean> = signal(false);

    onTouched!: () => void;
    onChange!: (value: TType) => void;

    private _control?: NgControl;
    
    constructor(
        injector: Injector
    ) {
        setTimeout(() => this._control = injector.get(NgControl, 0)); 
    }

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