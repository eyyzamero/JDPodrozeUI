import { TestBed } from '@angular/core/testing';

import { HomeExcursionsHttpService } from './home-excursions-http.service';

describe('HomeExcursionsHttpService', () => {
	let service: HomeExcursionsHttpService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(HomeExcursionsHttpService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});