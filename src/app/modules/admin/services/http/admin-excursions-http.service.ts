import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AdminExcursionsMapperService } from '../mapper/admin-excursions-mapper.service';
import { AdminExcursionsDataService } from '../data/admin-excursions-data.service';
import { LoadingState } from 'src/app/core/enums';
import { ExcursionsGetListReq, IExcursionsAddReq, IExcursionsEditReq, IExcursionsGetItemRes, IExcursionsGetListReq } from 'src/app/core/contracts';
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

	getList(req?: IExcursionsGetListReq): void {
		this._adminExcursionsDataService.updateState(LoadingState.LOADING);

		if (!req)
			req = new ExcursionsGetListReq();

		this._excursionsHttpService.getList(req).pipe(
			map(res => this._adminExcursionsMapperService.iExcursionsGetListResToArrayOfIExcursionModel(res))
		).subscribe({
			next: (value) => this._adminExcursionsDataService.add(value),
			error: (error) => this._adminExcursionsDataService.addError(error)
		});
	}

	getItemObservable(id: number): Observable<IExcursionsGetItemRes> {
		return this._excursionsHttpService.getItem(id);
	}

	getItemWithImagesObservable(id: number): Observable<IExcursionsGetItemRes> {
		return this._excursionsHttpService.getItemWithImages(id);
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