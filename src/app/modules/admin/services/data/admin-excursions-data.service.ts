import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/core/services/data/base/base-data.service';
import { IExcursionModel } from 'src/app/modules/excursions/models';

@Injectable({
	providedIn: 'root'
})
export class AdminExcursionsDataService extends BaseDataService<IExcursionModel[]> {

	constructor() {
		super();
	}
}