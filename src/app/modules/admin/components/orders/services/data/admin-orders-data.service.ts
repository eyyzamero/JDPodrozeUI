import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/core/services/data/base/base-data.service';
import { AdminOrdersExcursionModel } from '../../models';

@Injectable({
	providedIn: 'root'
})
export class AdminOrdersDataService extends BaseDataService<AdminOrdersExcursionModel[]> {

	constructor() {
		super([]);
	}
}