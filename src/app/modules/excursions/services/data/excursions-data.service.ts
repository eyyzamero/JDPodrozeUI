import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/core/services/data/base/base-data.service';
import { IExcursionModel } from '../../models';

@Injectable({
	providedIn: 'root'
})
export class ExcursionsDataService extends BaseDataService<Array<IExcursionModel>> {

	constructor() {
		super();
	}
}