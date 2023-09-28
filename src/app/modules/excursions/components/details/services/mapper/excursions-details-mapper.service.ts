import { Injectable } from '@angular/core';
import { IExcursionsGetItemImageRes, IExcursionsGetItemRes } from 'src/app/core/contracts';
import { ExcursionImageModel, ExcursionModel, IExcursionImageModel, IExcursionModel } from 'src/app/modules/excursions/models';

@Injectable({
	providedIn: 'root'
})
export class ExcursionsDetailsMapperService {

	constructor() { }

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
			0,
			src.images.map(image => this._iExcursionsGetItemImageResToIExcursionImageModel(image))
		);
		return dest;
	}

	private _iExcursionsGetItemImageResToIExcursionImageModel(src: IExcursionsGetItemImageRes): IExcursionImageModel {
		const dest = new ExcursionImageModel(src.id, src.excursionId, src.order, src.name, src.type, `data:image/${src.type};base64, ${src.base64}`);
		return dest;
	}
}