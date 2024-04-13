import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ExcursionsAddImageReq, ExcursionsAddReq, ExcursionsEditImageReq, ExcursionsEditReq, IExcursionsAddImageReq, IExcursionsAddReq, IExcursionsEditImageReq, IExcursionsEditReq, IExcursionsGetItemImageRes, IExcursionsGetItemRes, IExcursionsGetListItemImageRes, IExcursionsGetListItemRes, IExcursionsGetListRes } from 'src/app/core/contracts';
import { DatesService } from 'src/app/core/services';
import { ExcursionImageModel, ExcursionModel, IExcursionImageModel, IExcursionModel } from 'src/app/modules/excursions/models';

@Injectable({
	providedIn: 'root'
})
export class AdminExcursionsMapperService {

	constructor(
        private readonly _datesService: DatesService
    ) { }

	iExcursionsGetListResToArrayOfIExcursionModel(src: IExcursionsGetListRes): IExcursionModel[] {
		const dest = src.items.map(item => this._iExcursionsGetListItemResToIExcursionModel(item));
		return dest;
	}

	iExcursionFormGroupToIExcursionsAddReq(src: FormGroup): IExcursionsAddReq {
		const dest = new ExcursionsAddReq(
			src.controls['title'].value,
			src.controls['shortDescription'].value,
			src.controls['description'].value,
			src.controls['active'].value,
			src.controls['inCarousel'].value,
			src.controls['price'].value,
			src.controls['discount'].value,
			src.controls['discountPrice'].value,
            src.controls['seats'].value,
			src.controls['dateFrom'].value ? this._datesService.ngbDateToDate(src.controls['dateFrom'].value) : undefined,
			src.controls['dateTo'].value ? this._datesService.ngbDateToDate(src.controls['dateTo'].value) : undefined,
            src.controls['template'].value,
			(src.controls['images'].value as Array<ExcursionImageModel>).map(item => this._base64ToIExcursionsAddImageReq(item))
		);	
		return dest;
	}

	iExcursionFormGroupToIExcursionsEditReq(src: FormGroup): IExcursionsEditReq {
		const dest = new ExcursionsEditReq(
			src.controls['id'].value,
			src.controls['title'].value,
			src.controls['shortDescription'].value,
			src.controls['description'].value,
			src.controls['active'].value,
			src.controls['inCarousel'].value,
			src.controls['price'].value,
			src.controls['discount'].value,
			src.controls['discountPrice'].value,
            src.controls['seats'].value,
			src.controls['dateFrom'].value ? this._datesService.ngbDateToDate(src.controls['dateFrom'].value) : undefined,
			src.controls['dateTo'].value ? this._datesService.ngbDateToDate(src.controls['dateTo'].value) : undefined,
            src.controls['template'].value,
			(src.controls['images'].value as Array<ExcursionImageModel>).map(item => this._base64ToIExcursionsEditImageReq(item))
		);
		return dest;
	}

	iExcursionsGetItemResToFormGroup(src: IExcursionsGetItemRes, dest: FormGroup): FormGroup {
		dest.controls['id'].setValue(src.id);
		dest.controls['title'].setValue(src.title);
		dest.controls['shortDescription'].setValue(src.shortDescription);
		dest.controls['description'].setValue(src.description);
		dest.controls['active'].setValue(src.active);
		dest.controls['inCarousel'].setValue(src.inCarousel);
		dest.controls['price'].setValue(src.price);
		dest.controls['dateFrom'].setValue(src.dateFrom ? this._datesService.dateToNgbDate(new Date(src.dateFrom)) : null);
		dest.controls['dateTo'].setValue(src.dateTo ? this._datesService.dateToNgbDate(new Date(src.dateTo)) : null);
		dest.controls['discount'].setValue(src.discount);
		dest.controls['discountPrice'].setValue(src.discountPrice);
        dest.controls['seats'].setValue(src.seats);
		const images = src.images.map(image => this._iExcursionsGetItemImageResToFormControlIExcursionImageModel(image));
		(dest.controls['images'] as FormArray).clear();
		images.forEach(image => (dest.controls['images'] as FormArray).push(image));
		return dest;
	}

	private _base64ToIExcursionsAddImageReq(src: ExcursionImageModel): IExcursionsAddImageReq {
		const dest = new ExcursionsAddImageReq(
			src.name,
			src.type,
			src.base64.replace(/^data:.+;base64,/, '')
		);
		return dest;
	}

	private _base64ToIExcursionsEditImageReq(src: ExcursionImageModel): IExcursionsEditImageReq {
		const dest = new ExcursionsEditImageReq(
			src.id,
			src.excursionId,
			src.order,
			src.type,
			src.base64.replace(/^data:.+;base64,/, ''),
			src.name,
			src.deleted
		);
		return dest;
	}

	private _iExcursionsGetListItemResToIExcursionModel(src: IExcursionsGetListItemRes): IExcursionModel {
		const dest = new ExcursionModel(
			src.id,
			src.title,
			src.shortDescription,
			src.description,
			src.active,
			src.inCarousel,
			src.dateFrom,
			src.dateTo,
			src.priceGross,
			src.priceNet,
			src.discount,
			src.discountPrice,
            src.seats,
            src.availableSeats,
			0,
			src.images.map(image => this._iExcursionsGetListItemImageResToIExcursionImageModel(image))
		);
		return dest;
	}

	private _iExcursionsGetItemImageResToFormControlIExcursionImageModel(src: IExcursionsGetItemImageRes): FormControl<IExcursionImageModel | null> {
		const image = new ExcursionImageModel(src.id, src.excursionId, src.order, src.name, src.type, `data:image/${src.type};base64, ${src.base64}`);
		const dest = new FormControl(image);
		return dest;
	}

	private _iExcursionsGetListItemImageResToIExcursionImageModel(src: IExcursionsGetListItemImageRes): IExcursionImageModel {
		const dest = new ExcursionImageModel(src.id, src.excursionId, 0, src.name, src.type);
		return dest;
	}
}