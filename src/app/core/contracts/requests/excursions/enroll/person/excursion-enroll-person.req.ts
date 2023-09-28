import { IExcursionEnrollPersonReq } from '../../../..';

export class ExcursionEnrollPersonReq implements IExcursionEnrollPersonReq {

	constructor(
		public userId?: number,
		public name: string = '',
		public surname: string = '',
		public email?: string,
		public telephoneNumber?: string,
		public birthDate: string = '',
		public discount: boolean = false
	) { }
}