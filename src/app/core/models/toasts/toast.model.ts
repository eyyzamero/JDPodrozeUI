import { IToastModel } from '..';

export class ToastModel implements IToastModel {

	constructor(
		public id: number = 0,
		public text: string = '',
		public classes?: string
	) { }
}