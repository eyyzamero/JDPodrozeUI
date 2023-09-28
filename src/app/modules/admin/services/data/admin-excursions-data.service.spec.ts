import { TestBed } from '@angular/core/testing';

import { AdminExcursionsDataService } from './admin-excursions-data.service';

describe('AdminExcursionsDataService', () => {
	let service: AdminExcursionsDataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AdminExcursionsDataService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});