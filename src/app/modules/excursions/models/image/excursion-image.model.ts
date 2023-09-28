import { IExcursionImageModel } from '..';

export class ExcursionImageModel implements IExcursionImageModel {

	constructor(
		public id: number = 0,
		public excursionId: number = 0,
		public order: number = 0,
		public name: string = '',
		public type: string = '',
		public base64: string = '',
		public deleted: boolean = false
	) { }
}