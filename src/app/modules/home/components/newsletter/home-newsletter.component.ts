import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeNewsletterHttpService } from './services/http/home-newsletter-http.service';
import { NewsletterEnrollReq } from 'src/app/core/contracts';
import { Subscription } from 'rxjs';
import { Color, LoadingState } from 'src/app/core/enums';

@Component({
	selector: 'app-home-newsletter',
	templateUrl: './home-newsletter.component.html',
	styleUrls: ['./home-newsletter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeNewsletterComponent {

	form: FormGroup = new FormGroup({
		name: new FormControl(null, [
			Validators.required,
			Validators.maxLength(50)
		]),
		email: new FormControl(null, [
			Validators.required,
			Validators.email,
			Validators.maxLength(150)
		])
	});
	loadingState: LoadingState = LoadingState.LOADED;
	success: boolean = false;

	readonly Color = Color;
	readonly LoadingState = LoadingState;

	private _subscriptions: Subscription[] = [];

	constructor(
		private _homeNewsletterHttpService: HomeNewsletterHttpService,
		private _changeDetectorRef: ChangeDetectorRef
	) { }

	enroll(): void {
		if (this.form.valid) {
			const req = new NewsletterEnrollReq(
				this.form.controls['name'].value,
				this.form.controls['email'].value
			);
			this.loadingState = LoadingState.LOADING;
			this._changeDetectorRef.markForCheck();
			this._subscriptions.push(
				this._homeNewsletterHttpService.enroll(req).subscribe({
					next: () => {
						this.success = true;
						this.loadingState = LoadingState.LOADED;
						this._changeDetectorRef.markForCheck();
					},
					error: () => {
						this.loadingState = LoadingState.ERROR;
						this._changeDetectorRef.markForCheck();
					}
				})
			);
		}
	}
}