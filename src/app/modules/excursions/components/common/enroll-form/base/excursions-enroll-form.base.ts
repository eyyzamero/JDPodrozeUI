import { Directive, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Directive()
export abstract class ExcursionsEnrollFormBase {

    @Input({ required: true }) abstract form: FormGroup;
    
    constructor() { }

    getControl(controlName: string): FormControl {
        const control = this.form!.controls[controlName] as FormControl;
        return control;
    }
}