export interface IAuthRegisterReq {
	login: string;
	password: string;
	firstName: string;
	lastName: string;
	email: string;
	getToken: boolean;
}