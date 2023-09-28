import { IContactReq } from '../..';

export class ContactReq implements IContactReq {

	constructor(
		public nameAndSurname: string = '',
		public email: string = '',
		public content: string = ''
	) { }
}