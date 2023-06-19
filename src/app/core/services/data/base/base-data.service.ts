import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadingState } from 'src/app/core/enums';
import { DataModel, IDataModel } from 'src/app/core/models';

@Injectable({
	providedIn: 'root'
})
export abstract class BaseDataService<T> {

	get observable(): Observable<IDataModel<T>> {
		return this._dataSubject.asObservable();
	}

	get currentValue(): IDataModel<T> {
		return this._dataSubject.value;
	}

	private _model: IDataModel<T> = new DataModel<T>();
	protected _dataSubject: BehaviorSubject<IDataModel<T>> = new BehaviorSubject<IDataModel<T>>(this._model);

	constructor(
		model?: T
	) {
		if (this._model) {
			this._model = new DataModel(undefined, model);
			this._dataSubject.next(this._model);
		}
	}

	add(data: T, next: boolean = true) {
		this._model.data = data;
		this.updateState(LoadingState.LOADED, false);

		if (next)
			this._dataSubject.next(this._model);
	}

	addError(error: any, next: boolean = true) {
		this._model.error = error;
		this.updateState(LoadingState.ERROR, false);

		if (next)
			this._dataSubject.next(this._model);
	}

	updateState(state: LoadingState, next: boolean = true) {
		this._model.state = state;

		if (next)
			this._dataSubject.next(this._model);
	}

	clear(next: boolean = true) {
		this._model = new DataModel();
		
		if (next)
			this._dataSubject.next(this._model);
	}
}