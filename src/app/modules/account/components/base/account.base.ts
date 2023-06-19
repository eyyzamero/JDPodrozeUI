import { Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthHttpService } from 'src/app/core/services/http/auth/auth-http.service';

@Directive()
export abstract class AccountBase {

	abstract form: FormGroup;

	constructor(
		protected _authHttpService: AuthHttpService
	) { }
}