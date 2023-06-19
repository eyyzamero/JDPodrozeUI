import { Injectable } from '@angular/core';
import { IExcursionsGetListShortItemRes, IExcursionsGetListShortRes } from 'src/app/core/contracts';
import { ExcursionModel, IExcursionModel } from '../../models';

@Injectable({
	providedIn: 'root'
})
export class HomeExcursionsMapperService {

	constructor() { }

	iExcursionsGetListShortResToArrayOfIHomeExcursionModel(src: IExcursionsGetListShortRes): IExcursionModel[] {
		const dest = src.items.map(x => this._iExcursionsGetListShortItemResToIHomeExcursionModel(x));
		return dest;
	}

	private _iExcursionsGetListShortItemResToIHomeExcursionModel(src: IExcursionsGetListShortItemRes): IExcursionModel {
		const dest = new ExcursionModel(src.id, src.title, src.shortDescription, src.priceGross, src.priceNet);
		return dest;
	}
}