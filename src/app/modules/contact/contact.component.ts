import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactReq } from 'src/app/core/contracts';
import { Color, LoadingState } from 'src/app/core/enums';
import { ContactClientHttpService } from 'src/app/core/services/clients/contact/contact-client-http.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {

	form: FormGroup = new FormGroup({
		nameAndSurname: new FormControl(null, [
			Validators.required,
			Validators.maxLength(100)
		]),
		email: new FormControl(null, [
			Validators.required,
			Validators.email,
			Validators.maxLength(150)
		]),
		content: new FormControl(null, [
			Validators.required,
			Validators.maxLength(1024)
		])
	});
	loadingState: LoadingState = LoadingState.LOADED;
	success: boolean = false;

	readonly Color = Color;
	readonly LoadingState = LoadingState;

	private _subscriptions: Subscription[] = [];

	constructor(
		private _changeDetectorRef: ChangeDetectorRef,
		private _contactClientHttpService: ContactClientHttpService
	) { }

	submit(): void {
		this.form.markAllAsTouched();

		if (this.form.valid) {
			const req = new ContactReq(
				this.form.controls['nameAndSurname'].value,
				this.form.controls['email'].value,
				this.form.controls['content'].value,
			);
			this.loadingState = LoadingState.LOADING;
			this._changeDetectorRef.markForCheck();
			this._subscriptions.push(
				this._contactClientHttpService.contact(req).subscribe({
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