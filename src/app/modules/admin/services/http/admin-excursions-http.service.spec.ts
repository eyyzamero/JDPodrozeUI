import { TestBed } from '@angular/core/testing';

import { AdminExcursionsHttpService } from './admin-excursions-http.service';

describe('AdminExcursionsHttpService', () => {
	let service: AdminExcursionsHttpService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AdminExcursionsHttpService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});