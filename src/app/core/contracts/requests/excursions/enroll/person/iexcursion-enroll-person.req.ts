export interface IExcursionEnrollPersonReq {
	userId?: number,
	name: string;
	surname: string;
	email?: string;
	telephoneNumber?: string;
	birthDate: string;
	discount: boolean;
}