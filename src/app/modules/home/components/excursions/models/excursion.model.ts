import { IExcursionModel } from ".";

export class ExcursionModel implements IExcursionModel {

	constructor(
		public id: string = '',
		public name: string = ''
	) { }
}