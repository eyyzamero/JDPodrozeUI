export interface IJsonWebToken {
	nbf?: number;
	exp?: number;
	iat?: number;
	iss?: string;
	aud?: string;
}