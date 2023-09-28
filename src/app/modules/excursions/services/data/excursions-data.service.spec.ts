import { TestBed } from '@angular/core/testing';

import { ExcursionsDataService } from './excursions-data.service';

describe('ExcursionsDataService', () => {
	let service: ExcursionsDataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ExcursionsDataService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});