import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HomeExcursionsMapperService } from '../mappers/home-excursions-mapper.service';
import { ExcursionsHttpService } from 'src/app/core/services/clients';
import { HomeExcursionsDataService } from '../data/home-excursions-data.service';

@Injectable({
	providedIn: 'root'
})
export class HomeExcursionsHttpService {

	constructor(
		private _excursionsHttpService: ExcursionsHttpService,
		private _homeExcursionsMapperService: HomeExcursionsMapperService,
		private _homeExcursionsDataService: HomeExcursionsDataService
	) { }

	getExcursionsListShort(): void {
		this._excursionsHttpService.getListShort().pipe(
			map(res => this._homeExcursionsMapperService.iExcursionsGetListShortResToArrayOfIHomeExcursionModel(res))
		).subscribe({
			next: (value) => this._homeExcursionsDataService.add(value)
		})
	}
}