import { Directive } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { getControl } from 'src/app/core/helpers';
import { AuthHttpService } from 'src/app/core/services/http/auth/auth-http.service';

@Directive()
export abstract class AccountBase {

	abstract form: FormGroup;

	constructor(
		protected _router: Router,
		protected _authHttpService: AuthHttpService
	) { }

	navigateToHomePage(): void {
		this._router.navigate(['/']);
	}

    getFormControl(controlName: string): FormControl {
        return getControl<FormControl>(this.form, controlName);
    }
}