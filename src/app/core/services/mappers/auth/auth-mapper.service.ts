import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { IAuthModel } from 'src/app/core/models';

@Injectable({
	providedIn: 'root'
})
export class AuthMapperService {

	constructor() { }

	jsonWebTokenToIAuthModel(src: string): IAuthModel | null {
		try {
			const decodedToken = jwtDecode(src) as IAuthModel;
			decodedToken.Token = src;
			return decodedToken;
		} catch (ex) {
			return null;
		}
	}
}