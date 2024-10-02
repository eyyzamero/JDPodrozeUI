import { ChangeDetectorRef } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, catchError, map, of, take, tap } from "rxjs";
import { AuthIsLoginAvailableReq } from "src/app/core/contracts";
import { AuthHttpService } from "src/app/core/services/http/auth/auth-http.service";

export class IsLoginAvailableValidator {

    static createValidator(
        authHttpService: AuthHttpService,
        changeDetectorRef: ChangeDetectorRef,
        currentLogin?: string
    ): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            if (!control.value)
                return of(null);

            const request = new AuthIsLoginAvailableReq(control.value, currentLogin);
            const result = authHttpService.isLoginAvailable(request).pipe(
                take(1),
                map((res) => res === true ? null : { isLoginAvailable: true }),
                catchError((error) => {
                    console.error('API Error:', error);
                    return of(null)
                }),
                tap(() => {
                    control.markAsTouched();
                    changeDetectorRef.markForCheck();
                })
            );
            return result;
        };
    };
};