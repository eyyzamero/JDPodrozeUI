import { TestBed } from '@angular/core/testing';
import { BaseLocalStorageDataService } from './base-local-storage-data.service';

describe('BaseLocalStorageDataService', () => {
	let service: BaseLocalStorageDataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(BaseLocalStorageDataService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});