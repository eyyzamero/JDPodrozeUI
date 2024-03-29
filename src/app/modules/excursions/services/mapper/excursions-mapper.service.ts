import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ExcursionEnrollPersonReq, ExcursionsEnrollReq, IExcursionEnrollPersonReq, IExcursionsEnrollReq, IExcursionsGetItemImageRes, IExcursionsGetItemRes, IExcursionsGetListShortItemRes, IExcursionsGetListShortRes } from 'src/app/core/contracts';
import { AuthDataService } from 'src/app/core/services/data/auth/auth-data.service';
import { ExcursionImageModel, ExcursionModel, IExcursionImageModel, IExcursionModel, IExcursionsParticipantModel } from '../../models';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
	providedIn: 'root'
})
export class ExcursionsMapperService {

	constructor(
		private _authDataService: AuthDataService
	) { }

	iExcursionsGetItemResToIExcursionModel(src: IExcursionsGetItemRes): IExcursionModel {
		const dest = new ExcursionModel(
			src.id,
			src.title,
			src.shortDescription,
			src.description,
			src.active,
			src.inCarousel,
			src.dateFrom,
			src.dateTo,
			src.price,
			0,
			src.discount,
			src.discountPrice,
            src.seats,
            src.availableSeats,
			0,
			src.images.map(image => this._iExcursionsGetItemImageResToIExcursionImageModel(image))
		);
		return dest;
	}

	formGroupToIExcursionsEnrollReq(src: FormGroup): IExcursionsEnrollReq {
		const dest = new ExcursionsEnrollReq(
			src.controls['excursionId'].value,
			this.formGroupToIExcursionEnrollPersonReq(src),
			this.formArrayToArrayOfIExcursionEnrollPersonReq(src.controls['participants'] as FormArray),
			src.controls['paymentMethod'].value
		);
		return dest;
	}

	formGroupToIExcursionEnrollPersonReq(src: FormGroup): IExcursionEnrollPersonReq {
		const dest = new ExcursionEnrollPersonReq(
			this._authDataService.currentValue.data?.Id ?? undefined,
			src.controls['bookingPersonName'].value,
			src.controls['bookingPersonSurname'].value,
			src.controls['bookingPersonEmail'].value,	
			src.controls['bookingPersonTelephone'].value,
			this._ngbDateToDate(src.controls['bookingPersonBirthDate'].value),
			src.controls['bookingPersonDiscount'].value
		);
		return dest;
	}

	formArrayToArrayOfIExcursionEnrollPersonReq(src: FormArray): IExcursionEnrollPersonReq[] {
		let dest: IExcursionEnrollPersonReq[] = [];
		(src.value as Array<IExcursionsParticipantModel>).forEach(participant => {
			const enrollPerson = new ExcursionEnrollPersonReq(
				undefined,
				participant.name,
				participant.surname,
				undefined,
				undefined,
				this._ngbDateToDate(participant.birthDate),
				participant.discount
			);
			dest.push(enrollPerson);
		});
		return dest;
	}

	iExcursionsGetListShortResToArrayOfIHomeExcursionModel(src: IExcursionsGetListShortRes): IExcursionModel[] {
		const dest = src.items.map(x => this._iExcursionsGetListShortItemResToIHomeExcursionModel(x));
		return dest;
	}

	private _iExcursionsGetListShortItemResToIHomeExcursionModel(src: IExcursionsGetListShortItemRes, dest: IExcursionModel = new ExcursionModel()): IExcursionModel {
		dest.id = src.id;
		dest.title = src.title;
		dest.shortDescription = src.shortDescription;
		dest.priceGross = src.priceGross;
		dest.priceNet = src.priceNet;
		dest.imageId = src.imageId;
		dest.inCarousel = src.inCarousel;
		dest.dateFrom = src.dateFrom;
		dest.dateTo = src.dateTo;
		return dest;
	}

	private _ngbDateToDate(src: NgbDate): string {
		let date = new Date();
		date.setFullYear(src.year);
		date.setMonth(src.month - 1);
		date.setDate(src.day);
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		const dest = `${date.getDate().toString().padStart(2, '0')}/${date.getMonth().toString().padStart(2, '0')}/${date.getFullYear().toString().padStart(4, '0')}`;
		return dest;
	}

	private _iExcursionsGetItemImageResToIExcursionImageModel(src: IExcursionsGetItemImageRes): IExcursionImageModel {
		const dest = new ExcursionImageModel(src.id, src.excursionId, src.order, src.name, src.type, `data:image/${src.type};base64, ${src.base64}`);
		return dest;
	}
}