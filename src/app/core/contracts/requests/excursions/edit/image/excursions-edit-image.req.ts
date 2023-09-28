import { IExcursionsEditImageReq } from '../../../..';

export class ExcursionsEditImageReq implements IExcursionsEditImageReq {

	constructor(
		public id: number = 0,
		public excursionId: number = 0,
		public order: number = 0,
		public type: string = '',
		public base64: string = '',
		public name: string = '',
		public deleted: boolean = false
	) { }
}