import { IAuthModel } from '..';
import { RoleType } from '../../enums';

export class AuthModel implements IAuthModel {
	
	constructor(
		public Id: number = 0,
		public Login: string = '',
		public Email: string = '',
		public role: RoleType = RoleType.USER,
		public Token: string = ''
	) { }
}