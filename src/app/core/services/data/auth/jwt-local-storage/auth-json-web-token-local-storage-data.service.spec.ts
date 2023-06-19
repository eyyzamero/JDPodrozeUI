import { TestBed } from '@angular/core/testing';

import { AuthJsonWebTokenLocalStorageDataService } from './auth-json-web-token-local-storage-data.service';

describe('AuthJsonWebTokenLocalStorageDataService', () => {
	let service: AuthJsonWebTokenLocalStorageDataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AuthJsonWebTokenLocalStorageDataService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});