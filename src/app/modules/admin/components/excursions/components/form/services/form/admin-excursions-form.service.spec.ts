import { TestBed } from '@angular/core/testing';

import { AdminExcursionsFormService } from './admin-excursions-form.service';

describe('AdminExcursionsFormService', () => {
	let service: AdminExcursionsFormService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AdminExcursionsFormService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});