import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { ExcursionsMapperService } from '../../services/mapper/excursions-mapper.service';
import { Color, LoadingState } from 'src/app/core/enums';
import { FormArray, FormGroup } from '@angular/forms';
import { ExcursionModel, IExcursionModel } from '../../models';
import { ExcursionsHttpClientService } from 'src/app/core/services/clients';
import { ExcursionsEnrollForm } from '../common/enroll-form/static';

@Component({
	selector: 'app-excursions-enroll',
	templateUrl: './excursions-enroll.component.html',
	styleUrls: ['./excursions-enroll.component.scss']
})
export class ExcursionsEnrollComponent implements OnInit {

    form: FormGroup = ExcursionsEnrollForm.getEnrollForm();
	excursion: IExcursionModel = new ExcursionModel();
	excursionLoadingState: LoadingState = LoadingState.LOADING;
	excursionEnrollLoadingState: LoadingState = LoadingState.LOADED;

	get price(): number {
        const participants = ((this.form.controls['participants'] as FormArray).controls as Array<FormGroup>);
        const bookerDiscountCount: number = (this.form.controls['booker'] as FormGroup).controls['discount'].value === true ? 1 : 0;
        const otherParticipantsDiscountCount: number = participants.reduce((accumulator, participantFormGroup) => {
            return accumulator += (participantFormGroup.controls['discount'].value === true ? 1 : 0)
        }, 0);
        const withoutDiscountPrice: number = (1 - bookerDiscountCount + participants.length - otherParticipantsDiscountCount) * this.excursion.priceGross;
        const withDiscountPrice: number = (bookerDiscountCount + otherParticipantsDiscountCount) * this.excursion.discountPrice;
        return withoutDiscountPrice + withDiscountPrice;
	}

	readonly LoadingState = LoadingState;
	readonly Color = Color;

	constructor(
		private readonly _router: Router,
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _excursionsHttpService: ExcursionsHttpClientService,
		private readonly _excursionsMapperService: ExcursionsMapperService
	) { }

	ngOnInit(): void {
		this._initSubscriptions();
	}

	private _initSubscriptions(): void {
        this._activatedRoute.params.pipe(
            take(1)
        ).subscribe({
            next: (params) => {
                const excursionId = params['excursionId'];
                
                if (excursionId) {
                    const excursionId = +params['excursionId']; 
                    this._getExcursion(excursionId);
                }
            }
        });
	}

	onReservation(): void {
		this.form.markAllAsTouched();
		this.form.updateValueAndValidity();
		
        if (this.form.valid && this.excursionEnrollLoadingState === LoadingState.LOADED) {
			this.excursionEnrollLoadingState = LoadingState.LOADING;
            const req = this._excursionsMapperService.enrollFormGroupToIExcursionsEnrollReqNew(this.form, this.excursion.id);
			
            this._excursionsHttpService.enroll(req).pipe(
                take(1)
            ).subscribe({
                next: (guid) => {
                    this.excursionEnrollLoadingState = LoadingState.LOADED;

                    guid
                        ? this._router.navigate([`/excursions/enroll/verify/${guid}`])
                        : this._router.navigate(['/excursions/enroll/success'], {
                            state: {
                                price: this.price,
                                paymentMethod: this.form.controls['paymentMethod'].value,
                                excursionName: this.excursion.title
                            }
                        });
                },
                error: () => this.excursionEnrollLoadingState = LoadingState.LOADED
            });
		}
	}

	private _getExcursion(id: number): void {
		this.excursionLoadingState = LoadingState.LOADING;
        this._excursionsHttpService.getItem(id).pipe(
            take(1),
            map(res => this._excursionsMapperService.iExcursionsGetItemResToIExcursionModel(res))
        ).subscribe({
            next: (value) => {
                this.excursion = value;
                this.excursionLoadingState = LoadingState.LOADED;

                if (this.excursion.priceGross === 0)
                    this._router.navigate([`/excursions/details/${id}`])
            },
            error: () => this._router.navigate([`/excursions/details/${id}`])
        });
	}
}