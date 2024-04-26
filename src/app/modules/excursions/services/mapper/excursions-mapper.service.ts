import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ExcursionEnrollPersonReq, ExcursionsEnrollReq, IExcursionEnrollPersonReq, IExcursionsEnrollReq, IExcursionsGetItemImageRes, IExcursionsGetItemRes, IExcursionsGetListShortItemRes, IExcursionsGetListShortRes, IOrderParticipantAddOrEditReq, OrderParticipantAddOrEditReq } from 'src/app/core/contracts';
import { AuthDataService } from 'src/app/core/services/data/auth/auth-data.service';
import { ExcursionImageModel, ExcursionModel, IExcursionImageModel, IExcursionModel, IExcursionsParticipantModel } from '../../models';
import { DatesService } from 'src/app/core/services';
import { IAdminOrdersExcursionDetailsOrderModel, IAdminOrdersExcursionDetailsParticipantModel } from 'src/app/modules/admin/components/orders/models';

@Injectable({
	providedIn: 'root'
})
export class ExcursionsMapperService {

	constructor(
		private readonly _authDataService: AuthDataService,
        private readonly _datesService: DatesService
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

    // TODO - DO WYWALENIA
	formGroupToIExcursionsEnrollReq(src: FormGroup): IExcursionsEnrollReq {
		const dest = new ExcursionsEnrollReq(
			src.controls['excursionId'].value,
			this.formGroupToIExcursionEnrollPersonReq(src),
			this.formArrayToArrayOfIExcursionEnrollPersonReq(src.controls['participants'] as FormArray),
			src.controls['paymentMethod'].value
		);
		return dest;
	}

    enrollFormGroupToIExcursionsEnrollReqNew(src: FormGroup, excursionId: number): IExcursionsEnrollReq {
        const dest = new ExcursionsEnrollReq(
            excursionId,
            this.enrollFormGroupToIExcursionEnrollPersonReq(src.controls['booker'] as FormGroup, 0),
            this.enrollFormArrayToArrayOfIExcursionEnrollPersonReq(src.controls['participants'] as FormArray),
            src.controls['paymentMethod'].value
        );
        return dest;
    }

    // TODO DO WYWALENIA
	formGroupToIExcursionEnrollPersonReq(src: FormGroup): IExcursionEnrollPersonReq {
		const dest = new ExcursionEnrollPersonReq(
			this._authDataService.currentValue.data?.Id ?? undefined,
			src.controls['bookingPersonName'].value,
			src.controls['bookingPersonSurname'].value,
			src.controls['bookingPersonEmail'].value,	
			src.controls['bookingPersonTelephone'].value,
			this._datesService.ngbDateToDate(src.controls['bookingPersonBirthDate'].value),
			src.controls['bookingPersonDiscount'].value
		);
		return dest;
	}

    enrollFormGroupToIExcursionEnrollPersonReq(src: FormGroup, userId?: number): IExcursionEnrollPersonReq {
        const dest = new ExcursionEnrollPersonReq(
            userId === undefined ? undefined : Number(this._authDataService.currentValue.data?.Id) ?? undefined,
            src.controls['name'].value,
            src.controls['surname'].value,
            src.controls['email'] ? src.controls['email'].value : undefined,
            src.controls['telephone'] ? src.controls['telephone'].value : undefined,
            this._datesService.ngbDateToDate(src.controls['birthDate'].value),
            src.controls['discount'].value
        );
        return dest;
    }

    // TODO DO WYWALENIA
	formArrayToArrayOfIExcursionEnrollPersonReq(src: FormArray): IExcursionEnrollPersonReq[] {
		let dest: IExcursionEnrollPersonReq[] = [];
		(src.value as Array<IExcursionsParticipantModel>).forEach(participant => {
			const enrollPerson = new ExcursionEnrollPersonReq(
				undefined,
				participant.name,
				participant.surname,
				undefined,
				undefined,
				this._datesService.ngbDateToDate(participant.birthDate),
				participant.discount
			);
			dest.push(enrollPerson);
		});
		return dest;
	}

    enrollFormArrayToArrayOfIExcursionEnrollPersonReq(src: FormArray): IExcursionEnrollPersonReq[] {
        const dest = (src.controls as Array<FormGroup>).map(formGroup => this.enrollFormGroupToIExcursionEnrollPersonReq(formGroup, undefined));
        return dest;
    }

	iExcursionsGetListShortResToArrayOfIHomeExcursionModel(src: IExcursionsGetListShortRes): IExcursionModel[] {
		const dest = src.items.map(x => this._iExcursionsGetListShortItemResToIHomeExcursionModel(x));
		return dest;
	}

    iAdminOrdersExcursionDetailsParticipantModelToBookerFormGroup(src: IAdminOrdersExcursionDetailsParticipantModel, dest: FormGroup): FormGroup {
        dest.controls['name'].setValue(src.name);
        dest.controls['surname'].setValue(src.surname);
        dest.controls['email'].setValue(src.email);
        dest.controls['telephone'].setValue(src.telephoneNumber);
        dest.controls['birthDate'].setValue(this._datesService.dateToNgbDate(src.birthDate));
        dest.controls['discount'].setValue(src.discount);
        return dest;
    }
    
    iAdminOrdersExcursionDetailsParticipantModelToParticipantFormGroup(src: IAdminOrdersExcursionDetailsParticipantModel, dest: FormGroup): FormGroup {
        dest.controls['name'].setValue(src.name);
        dest.controls['surname'].setValue(src.surname);
        dest.controls['birthDate'].setValue(this._datesService.dateToNgbDate(src.birthDate));
        dest.controls['discount'].setValue(src.discount);
        return dest;
    }

    participantFormGroupToIOrderParticipantAddOrEditReq(src: FormGroup, order: IAdminOrdersExcursionDetailsOrderModel, participantId?: number): IOrderParticipantAddOrEditReq {
        const dest = new OrderParticipantAddOrEditReq(
            participantId,
            order.bookerId,
            order.id,
            src.controls['name'].value,
            src.controls['surname'].value,
            undefined,
            undefined,
            this._datesService.ngbDateToDate(src.controls['birthDate'].value),
            src.controls['discount'].value
        );
        return dest;
    }

    bookerFormGroupToIOrderParticipantAddOrEditReq(src: FormGroup, order: IAdminOrdersExcursionDetailsOrderModel): IOrderParticipantAddOrEditReq {
        let dest = this.participantFormGroupToIOrderParticipantAddOrEditReq(src, order);
        dest.id = order.bookerId;
        dest.bookerId = undefined,
        dest.email = src.controls['email'].value,
        dest.telephoneNumber = src.controls['telephone'].value;
        return dest
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

	private _iExcursionsGetItemImageResToIExcursionImageModel(src: IExcursionsGetItemImageRes): IExcursionImageModel {
		const dest = new ExcursionImageModel(src.id, src.excursionId, src.order, src.name, src.type, `data:image/${src.type};base64, ${src.base64}`);
		return dest;
	}
}