import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { ExcursionsMapperService } from '../../services/mapper/excursions-mapper.service';
import { Color, ImageExtension, LoadingState, PaymentMethod, Resolution } from 'src/app/core/enums';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDateFormatterService } from 'src/app/core/formatters/ngb-date/ngb-date-formatter.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { ExcursionModel, IExcursionModel } from '../../models';
import { ExcursionsHttpClientService } from 'src/app/core/services/clients';
import { configuration } from 'src/configurations/configuration';

@Component({
	selector: 'app-excursions-enroll',
	templateUrl: './excursions-enroll.component.html',
	styleUrls: ['./excursions-enroll.component.scss']
})
export class ExcursionsEnrollComponent implements OnInit {

	form: FormGroup = new FormGroup({});
	excursion: IExcursionModel = new ExcursionModel();
	excursionLoadingState: LoadingState = LoadingState.LOADING;
	excursionEnrollLoadingState: LoadingState = LoadingState.LOADED;
	tourParticipantsCount: number = 1;

	minDate = new NgbDate(new Date().getFullYear() - 100, 1, 1);
	maxDate = new NgbDate(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate())

	get participants(): Array<FormGroup> {
		return (this.form.controls['participants'] as FormArray).controls as Array<FormGroup>;
	}

	get price(): number {
		const bookerDiscountCount: number = this.form.controls['bookingPersonDiscount'].value === true ? 1 : 0;
		const otherParticipantsDiscountCount: number = this.participants.reduce((accumulator: number, item: FormGroup) => {
			return item.controls['discount'].value === true ? accumulator = accumulator + 1 : accumulator
		}, 0);
		const withoutDiscountPrice: number = (1 - bookerDiscountCount + this.participants.length - otherParticipantsDiscountCount) * this.excursion.priceGross;
		const withDiscountPrice: number = (bookerDiscountCount + otherParticipantsDiscountCount) * this.excursion.discountPrice;
		return withoutDiscountPrice + withDiscountPrice;
	}

	readonly LoadingState = LoadingState;
	readonly PaymentMethod = PaymentMethod;
	readonly Color = Color;
	readonly ImageExtension = ImageExtension;

	private _subscriptions: Subscription[] = [];

	constructor(
		public formatter: NgbDateFormatterService,
		private _router: Router,
		private _activatedRoute: ActivatedRoute,
		private _excursionsHttpService: ExcursionsHttpClientService,
		private _excursionsMapperService: ExcursionsMapperService
	) { }

	ngOnInit(): void {
		this._initForm();
		this._initSubscriptions();
	}

	private _initForm(): void {
		this.form = new FormGroup({
			excursionId: new FormControl(undefined),
			bookingPersonName: new FormControl('', [
				Validators.required,
				Validators.maxLength(50)
			]),
			bookingPersonSurname: new FormControl('', [
				Validators.required,
				Validators.maxLength(50)
			]),
			bookingPersonEmail: new FormControl('', [
				Validators.required,
				Validators.email,
				Validators.maxLength(150)
			]),
			bookingPersonTelephone: new FormControl('', [
				Validators.required,
				Validators.pattern('^((\\+48)|48)?\\d{7,9}$')
			]),
			bookingPersonBirthDate: new FormControl(null, [
				Validators.required
			]),
			bookingPersonDiscount: new FormControl(false, [
				Validators.required
			]),
			participants: new FormArray([]),
			paymentMethod: new FormControl(PaymentMethod.TRADITIONAL_TRANSFER)
		});
	}

	private _initSubscriptions(): void {
		this._subscriptions.push(
			this._activatedRoute.params.subscribe({
				next: (params) => {
					const excursionId = params['excursionId'];
					
					if (excursionId) {
						const excursionId = +params['excursionId']; 
						this._getExcursion(excursionId);
						this.form.controls['excursionId'].setValue(excursionId);
					}
				}
			})
		);
	}

	selectPaymentMethod(value: PaymentMethod) {
		this.form.controls['paymentMethod'].setValue(value);
	}

	onTourParticipantsChange() {
		(this.form.controls['participants'] as FormArray).clear();
		const count = this.tourParticipantsCount - 1;

		if (count > 0)
			for (let i = 0; i < count; i++)
				(this.form.controls['participants'] as FormArray<FormGroup>).push(
					new FormGroup({
						name: new FormControl('', [
							Validators.required,
							Validators.maxLength(50)
						]),
						surname: new FormControl('', [
							Validators.required,
							Validators.maxLength(50)
						]),
						birthDate: new FormControl(null, [
							Validators.required
						]),
						discount: new FormControl(false, [
							Validators.required
						])
					})
				)
	}

	onReservation(): void {
		this.form.markAllAsTouched();
		this.form.updateValueAndValidity();
		if (this.form.valid && this.excursionEnrollLoadingState === LoadingState.LOADED) {
			this.excursionEnrollLoadingState = LoadingState.LOADING;
			const req = this._excursionsMapperService.formGroupToIExcursionsEnrollReq(this.form);
			
			this._subscriptions.push(
				this._excursionsHttpService.enroll(req).subscribe({
					next: (guid) => {
						this.excursionEnrollLoadingState = LoadingState.LOADED;

						guid
							? this._router.navigate([`/excursions/enroll/verify/${guid}`])
							: this._router.navigate(['excursions/enroll/success'], {
								state: {
									price: this.price,
									paymentMethod: this.form.controls['paymentMethod'].value,
									excursionName: this.excursion.title
								}
							});
					},
					error: () => {
						this.excursionEnrollLoadingState = LoadingState.LOADED;
					}
				})
			);
		}
	}

	getImage(id: number, imageExtension: ImageExtension): string {
		return `${configuration.api}/Excursions/GetImageNew/${id}/${Resolution.nHD}/${imageExtension}`;
	}

	private _getExcursion(id: number): void {
		this.excursionLoadingState = LoadingState.LOADING;
		this._subscriptions.push(
			this._excursionsHttpService.getItem(id).pipe(
				map(res => this._excursionsMapperService.iExcursionsGetItemResToIExcursionModel(res))
			).subscribe({
				next: (value) => {
					this.excursion = value;
					this.excursionLoadingState = LoadingState.LOADED;

					if (this.excursion.priceGross === 0)
						this._router.navigate([`/excursions/details/${id}`])
				},
				error: () => this._router.navigate([`/excursions/details/${id}`])
			})
		);
	}
}