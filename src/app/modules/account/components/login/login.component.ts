import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountBase } from '../base/account.base';
import { AuthHttpService } from 'src/app/core/services/http/auth/auth-http.service';
import { AuthLoginReq } from 'src/app/core/contracts';
import { AuthJsonWebTokenLocalStorageDataService } from 'src/app/core/services/data/auth/jwt-local-storage/auth-json-web-token-local-storage-data.service';
import { Router } from '@angular/router';
import { LoadingState } from 'src/app/core/enums';
import { Subscription, take } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent extends AccountBase implements OnInit, OnDestroy {

	form: FormGroup = new FormGroup({
		login: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.maxLength(50)
            ],
            updateOn: 'blur'
        }),
		password: new FormControl(null, {
            validators: [
                Validators.required,
                Validators.maxLength(255)
            ],
            updateOn: 'blur'
        })
	});
	loadingState: LoadingState = LoadingState.LOADED;
	invalidCredentialsError: boolean = false;

	readonly LoadingState = LoadingState;

	private get _isLoading(): boolean {
		return this.loadingState === LoadingState.LOADING;
	}

	private _subscriptions: Subscription[] = [];

	constructor(
		readonly authHttpService: AuthHttpService,
		readonly router: Router,
		private readonly _authJsonWebTokenLocalStorageDataService: AuthJsonWebTokenLocalStorageDataService
	) {
		super(router, authHttpService);
	}

	ngOnInit(): void {
		this._subscriptions.push(
			this._authJsonWebTokenLocalStorageDataService.observable.subscribe({
				next: (value) => this.loadingState = value.state
			})
		);
	}

	tryToLogin(): void {
		if (this.form.valid && !this._isLoading) {
			this.invalidCredentialsError = false;
			const request = new AuthLoginReq(this.form.controls['login'].value, this.form.controls['password'].value);
            this._authHttpService.login(request).pipe(
                take(1)
            ).subscribe({
                next: (value) => {
                    this._authJsonWebTokenLocalStorageDataService.add(value);
                    this._router.navigate(['/']);
                },
                error: (error: HttpErrorResponse) => {
                    if (error.status === 400)
                        this.invalidCredentialsError = true;
                        
                    this._authJsonWebTokenLocalStorageDataService.addError(error);
                }
            })
		}
	}

	ngOnDestroy(): void {
		this._subscriptions.forEach(x => x.unsubscribe());
	}
}