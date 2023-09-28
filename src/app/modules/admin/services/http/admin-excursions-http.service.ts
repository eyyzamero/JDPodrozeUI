import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AdminExcursionsMapperService } from '../mapper/admin-excursions-mapper.service';
import { AdminExcursionsDataService } from '../data/admin-excursions-data.service';
import { LoadingState } from 'src/app/core/enums';
import { IExcursionsAddReq, IExcursionsEditReq, IExcursionsGetItemRes } from 'src/app/core/contracts';
import { ExcursionsHttpClientService } from 'src/app/core/services/clients';

@Injectable({
	providedIn: 'root'
})
export class AdminExcursionsHttpService {

	constructor(
		private _excursionsHttpService: ExcursionsHttpClientService,
		private _adminExcursionsMapperService: AdminExcursionsMapperService,
		private _adminExcursionsDataService: AdminExcursionsDataService
	) { }

	getList(): void {
		this._adminExcursionsDataService.updateState(LoadingState.LOADING);
		this._excursionsHttpService.getList().pipe(
			map(res => this._adminExcursionsMapperService.iExcursionsGetListResToArrayOfIExcursionModel(res))
		).subscribe({
			next: (value) => this._adminExcursionsDataService.add(value),
			error: (error) => this._adminExcursionsDataService.addError(error)
		});
	}

	getItemObservable(id: number): Observable<IExcursionsGetItemRes> {
		return this._excursionsHttpService.getItem(id);
	}

	addObservable(req: IExcursionsAddReq): Observable<void> {
		return this._excursionsHttpService.add(req);
	}

	editObservable(req: IExcursionsEditReq): Observable<void> {
		return this._excursionsHttpService.edit(req);
	}

	deleteObservable(id: number): Observable<void> {
		return this._excursionsHttpService.delete(id);
	}
}