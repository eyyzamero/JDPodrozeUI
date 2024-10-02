import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { AuthHttpService } from 'src/app/core/services/http/auth/auth-http.service';
import { Router } from '@angular/router';
import { AuthRegisterReq } from 'src/app/core/contracts';
import { take } from 'rxjs';
import { AuthJsonWebTokenLocalStorageDataService } from 'src/app/core/services/data/auth/jwt-local-storage/auth-json-web-token-local-storage-data.service';
import { FormGroup } from '@angular/forms';
import { LoadingState } from 'src/app/core/enums';

@Component({
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {

    error: WritableSignal<boolean> = signal(false);
    loadingState: WritableSignal<LoadingState> = signal(LoadingState.LOADED);

	constructor(
		private readonly _router: Router,
		private readonly _authHttpService: AuthHttpService,
		private readonly _authJsonWebTokenLocalStorageDataService: AuthJsonWebTokenLocalStorageDataService
    ) { }

    navigateToHomePage(): void {
		this._router.navigate(['/']);
	}

	register(form: FormGroup): void {
        form.markAllAsTouched();
        if (form.valid) {
            form.disable();
            this.error.set(false);
            this.loadingState.set(LoadingState.LOADING);
            const request = new AuthRegisterReq(
                form.controls['login'].value,
                form.controls['password'].value,
                form.controls['firstName'].value,
                form.controls['lastName'].value,
                form.controls['email'].value,
                true
            );
            this._authHttpService.register(request).pipe(
                take(1)
            ).subscribe({
                next: (value) => {
                    this._authJsonWebTokenLocalStorageDataService.add(value.token);
                    this.loadingState.set(LoadingState.LOADED);
                    this._router.navigate(['/']);
                },
                error: () => {
                    this.error.set(true);
                    this.loadingState.set(LoadingState.ERROR);
                    form.enable();
                }
            });
        }
	}
}