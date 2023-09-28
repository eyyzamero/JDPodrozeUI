import { INewsletterEnrollReq } from '../../..';

export class NewsletterEnrollReq implements INewsletterEnrollReq {

	constructor(
		public name: string = '',
		public email: string = ''
	) { }
}