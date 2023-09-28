import { TestBed } from '@angular/core/testing';

import { ExcursionsHttpService } from './excursions-http.service';

describe('ExcursionsHttpService', () => {
	let service: ExcursionsHttpService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ExcursionsHttpService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});