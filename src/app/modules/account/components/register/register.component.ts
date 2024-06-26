import { ChangeDetectionStrategy, ChangeDetectorRef, Component, WritableSignal, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountBase } from '../base/account.base';
import { AuthHttpService } from 'src/app/core/services/http/auth/auth-http.service';
import { Router } from '@angular/router';
import { AuthRegisterReq } from 'src/app/core/contracts';
import { take } from 'rxjs';
import { AuthJsonWebTokenLocalStorageDataService } from 'src/app/core/services/data/auth/jwt-local-storage/auth-json-web-token-local-storage-data.service';
import { IsLoginAvailableValidator, passwordsEqualValidator } from './validators';
import { debounceTimeValidator } from 'src/app/core/validators';

@Component({
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent extends AccountBase {

	form: FormGroup = new FormGroup({
		login: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(50),
            ],
            asyncValidators: [
                debounceTimeValidator(IsLoginAvailableValidator.createValidator(this._authHttpService, this._changeDetectorRef), 500) 
            ]
        }),
		password: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(255)
            ]
        }),
		confirmPassword: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(255),
                passwordsEqualValidator
            ]
        }),
		firstName: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.maxLength(50)
            ]
        }),
		lastName: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.maxLength(50)
            ]
        }),
		email: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.email,
                Validators.maxLength(255)
            ]
        })
	});
    error: WritableSignal<boolean> = signal(false);

	constructor(
		readonly router: Router,
		readonly authHttpService: AuthHttpService,
		private readonly _authJsonWebTokenLocalStorageDataService: AuthJsonWebTokenLocalStorageDataService,
        private readonly _changeDetectorRef: ChangeDetectorRef
	) {
		super(router, authHttpService);
	}

	register(): void {
        this.error.set(false);
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
                    this.error.set(true);
                    this.form.enable();
                }
            })
		}
	}
}