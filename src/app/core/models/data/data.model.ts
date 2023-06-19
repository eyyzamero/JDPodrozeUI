import { IDataModel } from '..';
import { LoadingState } from '../../enums';

export class DataModel<T> implements IDataModel<T> {

	constructor(
		public state: LoadingState = LoadingState.LOADED,
		public data?: T,
		public error?: any
	) { }
}