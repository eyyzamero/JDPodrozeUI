import { RoleType } from '../../enums';
import { IJsonWebToken } from '../jwt/ijson-web-token.model';

export interface IAuthModel extends IJsonWebToken {
	Id: number;
	Login: string;
	Email: string;
	role: RoleType;
	Token: string;
}