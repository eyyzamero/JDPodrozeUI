export interface IAccountAddOrEditReq {
    id?: number;
    login: string;
    password?: string;
    firstName: string;
    lastName: string;
    email: string;
}