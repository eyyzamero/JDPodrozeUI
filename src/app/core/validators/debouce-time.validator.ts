import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, debounceTime, first, switchMap } from "rxjs";

export function debounceTimeValidator(validator: AsyncValidatorFn, debounceTimeMs: number): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return control.valueChanges.pipe(
            debounceTime(debounceTimeMs),
            switchMap(() => validator(control)),
            first()
        );
    };
};