import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountBase } from '../base/account.base';
import { AuthHttpService } from 'src/app/core/services/http/auth/auth-http.service';
import { Router } from '@angular/router';
import { AuthRegisterReq } from 'src/app/core/contracts';
import { take } from 'rxjs';
import { AuthJsonWebTokenLocalStorageDataService } from 'src/app/core/services/data/auth/jwt-local-storage/auth-json-web-token-local-storage-data.service';
import { IsLoginAvailableValidator, passwordsEqualValidator } from './validators';

@Component({
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends AccountBase {

	form: FormGroup = new FormGroup({
		login: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.maxLength(50),
            ],
            asyncValidators: [
                IsLoginAvailableValidator.createValidator(this._authHttpService)
            ],
            updateOn: 'blur'
        }),
		password: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.maxLength(255)
            ],
            updateOn: 'blur'
        }),
		confirmPassword: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.maxLength(255),
                passwordsEqualValidator
            ],
            updateOn: 'blur'
        }),
		firstName: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.maxLength(50)
            ],
            updateOn: 'blur'
        }),
		lastName: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.maxLength(50)
            ],
            updateOn: 'blur'
        }),
		email: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.email,
                Validators.maxLength(255)
            ]
        })
	});
    error: boolean = false;

	constructor(
		readonly router: Router,
		readonly authHttpService: AuthHttpService,
		private readonly _authJsonWebTokenLocalStorageDataService: AuthJsonWebTokenLocalStorageDataService,
	) {
		super(router, authHttpService);
	}

	register(): void {
        this.form.markAllAsTouched();
		if (this.form.valid) {
			const request = new AuthRegisterReq(
				this.form.controls['login'].value,
				this.form.controls['password'].value,
				this.form.controls['firstName'].value,
				this.form.controls['lastName'].value,
				this.form.controls['email'].value,
				true
			);
            this.form.disable();
            this._authHttpService.register(request).pipe(
                take(1)
            ).subscribe({
                next: (value) => {
                    this._authJsonWebTokenLocalStorageDataService.add(value.token);
                    this._router.navigate(['/']);
                },
                error: () => {
                    this.error = true;
                    this.form.enable();
                }
            })
		}
	}
}