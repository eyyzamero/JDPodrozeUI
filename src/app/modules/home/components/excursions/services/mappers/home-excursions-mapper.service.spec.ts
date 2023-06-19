import { TestBed } from '@angular/core/testing';

import { HomeExcursionsMapperService } from './home-excursions-mapper.service';

describe('HomeExcursionsMapperService', () => {
	let service: HomeExcursionsMapperService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(HomeExcursionsMapperService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});