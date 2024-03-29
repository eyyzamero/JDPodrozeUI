import { Directive } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

    getControl(controlName: string) {
        const control = this.form.controls[controlName];
        return control as FormControl;
    }
}