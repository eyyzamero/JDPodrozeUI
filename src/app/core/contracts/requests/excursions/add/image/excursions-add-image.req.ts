import { IExcursionsAddImageReq } from 'src/app/core/contracts';

export class ExcursionsAddImageReq implements IExcursionsAddImageReq {

	constructor(
		public name: string = '',
		public type: string = '',
		public base64: string = ''
	) { }
}