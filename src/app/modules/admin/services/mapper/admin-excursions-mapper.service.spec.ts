import { TestBed } from '@angular/core/testing';

import { AdminExcursionsMapperService } from './admin-excursions-mapper.service';

describe('AdminExcursionsMapperService', () => {
	let service: AdminExcursionsMapperService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AdminExcursionsMapperService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});