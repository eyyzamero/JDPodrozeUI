import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountBase } from '../base/account.base';
import { AuthHttpService } from 'src/app/core/services/http/auth/auth-http.service';

@Component({
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends AccountBase {

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

	constructor(
		authHttpService: AuthHttpService
	) {
		super(authHttpService);
	}

	register() {
		if (this.form.valid) {
			// const request = new AccountRegisterReq(
			// 	this.form.controls['login'].value,
			// 	this.form.controls['password'].value,
			// 	this.form.controls['firstName'].value,
			// 	this.form.controls['lastName'].value,
			// 	this.form.controls['email'].value,
			// 	true
			// );
			// this._accountCommunicationService.register(request);
		}
	}
}