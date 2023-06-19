import { IAuthLoginReq } from '../../..';

export class AuthLoginReq implements IAuthLoginReq {

	constructor(
		public login: string,
		public password: string
	) { }
}