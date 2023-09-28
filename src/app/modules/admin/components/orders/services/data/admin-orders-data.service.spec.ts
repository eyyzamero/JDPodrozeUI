import { TestBed } from '@angular/core/testing';

import { AdminOrdersDataService } from './admin-orders-data.service';

describe('AdminOrdersDataService', () => {
	let service: AdminOrdersDataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AdminOrdersDataService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});