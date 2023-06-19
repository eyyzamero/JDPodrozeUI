import { LoadingState } from '../../enums';

export interface IDataModel<T> {
	state: LoadingState;
	data?: T;
	error?: any;
}