import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AccountBase } from '../base/account.base';
import { AuthHttpService } from 'src/app/core/services/http/auth/auth-http.service';
import { Router } from '@angular/router';
import { AuthRegisterReq } from 'src/app/core/contracts';
import { Subscription } from 'rxjs';
import { AuthJsonWebTokenLocalStorageDataService } from 'src/app/core/services/data/auth/jwt-local-storage/auth-json-web-token-local-storage-data.service';
import { CommonModule } from '@angular/common';

@Component({
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class RegisterComponent extends AccountBase implements OnDestroy {

	form: FormGroup = new FormGroup({
		login: new FormControl(null, [
			Validators.required,
			Validators.maxLength(50)
		]),
		password: new FormControl(null, [
			Validators.required,
			Validators.maxLength(255)
		]),
		confirmPassword: new FormControl(null, [
			Validators.required,
			Validators.maxLength(255)
		]),
		firstName: new FormControl(null, [
			Validators.required,
			Validators.maxLength(50)
		]),
		lastName: new FormControl(null, [
			Validators.required,
			Validators.maxLength(50)
		]),
		email: new FormControl(null, [
			Validators.required,
			Validators.email,
			Validators.maxLength(255)
		])
	});

	private _subscriptions: Subscription[] = [];

	constructor(
		router: Router,
		authHttpService: AuthHttpService,
		private _authJsonWebTokenLocalStorageDataService: AuthJsonWebTokenLocalStorageDataService
	) {
		super(router, authHttpService);
	}

	register(): void {
		if (this.form.valid) {
			const request = new AuthRegisterReq(
				this.form.controls['login'].value,
				this.form.controls['password'].value,
				this.form.controls['firstName'].value,
				this.form.controls['lastName'].value,
				this.form.controls['email'].value,
				true
			);
			this._subscriptions.push(
				this._authHttpService.register(request).subscribe({
					next: (value) => {
						this._authJsonWebTokenLocalStorageDataService.add(value.token);
						this._router.navigate(['/']);
					}
				})
			)
		}
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}