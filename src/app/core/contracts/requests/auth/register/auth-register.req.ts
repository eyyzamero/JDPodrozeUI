import { IAuthRegisterReq } from '../../..';

export class AuthRegisterReq implements IAuthRegisterReq {

	constructor(
		public login: string = '',
		public password: string = '',
		public firstName: string = '',
		public lastName: string = '',
		public email: string = '',
		public getToken: boolean = false
	) { }
}