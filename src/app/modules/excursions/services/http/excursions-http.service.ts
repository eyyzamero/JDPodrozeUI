import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { LoadingState } from 'src/app/core/enums';
import { ExcursionsMapperService } from '../mapper/excursions-mapper.service';
import { ExcursionsDataService } from '../data/excursions-data.service';
import { ExcursionsHttpClientService } from 'src/app/core/services/clients';

@Injectable({
	providedIn: 'root'
})
export class ExcursionsHttpService {

	constructor(
		private _excursionsHttpClientService: ExcursionsHttpClientService,
		private _excursionsMapperService: ExcursionsMapperService,
		private _excursionsDataService: ExcursionsDataService
	) { }

	getExcursionsListShort(): void {
		this._excursionsDataService.updateState(LoadingState.LOADING);
		this._excursionsHttpClientService.getListShort().pipe(
			map(res => this._excursionsMapperService.iExcursionsGetListShortResToArrayOfIHomeExcursionModel(res))
		).subscribe({
			next: (value) => this._excursionsDataService.add(value)
		})
	}
}