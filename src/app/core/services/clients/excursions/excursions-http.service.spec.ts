import { TestBed } from '@angular/core/testing';

import { ExcursionsHttpClientService } from './excursions-http.service';

describe('ExcursionsHttpClientService', () => {
	let service: ExcursionsHttpClientService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ExcursionsHttpClientService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});