import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { IAuthModel } from 'src/app/core/models';

@Injectable({
	providedIn: 'root'
})
export class JsonWebTokenService {

	constructor() { }

	hasTokenExpired(token: string): boolean {
		try {
			const decodedToken: IAuthModel = jwtDecode(token) as IAuthModel;
			const currentTime = Date.now() / 1000;

			return (decodedToken.exp ?? 0) < currentTime ? true : false;
		} catch(error) {
			console.error(`Invalid Json Web Token`, error);
			return true;
		}
	}
}