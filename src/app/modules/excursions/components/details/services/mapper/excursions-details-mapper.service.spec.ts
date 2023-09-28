import { TestBed } from '@angular/core/testing';

import { ExcursionsDetailsMapperService } from './excursions-details-mapper.service';

describe('ExcursionsDetailsMapperService', () => {
	let service: ExcursionsDetailsMapperService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ExcursionsDetailsMapperService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});