import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, map, take } from "rxjs";
import { AuthIsLoginAvailableReq } from "src/app/core/contracts";
import { AuthHttpService } from "src/app/core/services/http/auth/auth-http.service"

export class IsLoginAvailableValidator {

    static createValidator(authHttpService: AuthHttpService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
            const request = new AuthIsLoginAvailableReq(control.value);
            const result = authHttpService.isLoginAvailable(request).pipe(
                take(1),
                map((res) => res === true ? null : { isLoginAvailable: true })
            );
            return result;
        }
    }
}