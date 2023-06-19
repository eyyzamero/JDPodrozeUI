import { TestBed } from '@angular/core/testing';

import { HomeExcursionsDataService } from './home-excursions-data.service';

describe('HomeExcursionsDataService', () => {
	let service: HomeExcursionsDataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(HomeExcursionsDataService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});