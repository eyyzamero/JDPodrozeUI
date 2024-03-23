import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

export const passwordsEqualValidator = (control: AbstractControl<any, any>): ValidationErrors | null => {
    const passwordControl = control.parent?.get('password') as FormControl;
    const confirmPasswordControl = control;

    const result = passwordControl && confirmPasswordControl && passwordControl.value === confirmPasswordControl.value
        ? null
        : { passwordsEqual: true }

    return result;
}