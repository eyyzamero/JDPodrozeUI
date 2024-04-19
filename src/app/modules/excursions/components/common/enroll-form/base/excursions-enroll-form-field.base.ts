import { Directive, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Directive()
export class ExcursionsEnrollFormFieldBase {

    @Input({ required: true }) control!: FormControl;

    constructor() { }

    get errorKey(): string | undefined {
        const result = !this.control.errors ? undefined : Object.keys(this.control.errors)[0];
        return result; 
    }
}