import { Injectable } from '@angular/core';
import { BaseLocalStorageDataService } from '../../base/base-local-storage-data.service';

const AUTH_LOCAL_STORAGE_KEY = 'auth';

@Injectable({
	providedIn: 'root'
})
export class AuthJsonWebTokenLocalStorageDataService extends BaseLocalStorageDataService<string | null> {

	constructor() {
		super(AUTH_LOCAL_STORAGE_KEY);
	}
}