import { IExcursionModel } from '.';

export class ExcursionModel implements IExcursionModel {

	constructor(
		public id: number = 0,
		public name: string = '',
		public description: string = '',
		public priceGross: number = 0,
		public priceNet: number = 0,
		public image: string = ''
	) { }
}