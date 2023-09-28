import { TestBed } from '@angular/core/testing';

import { AdminOrdersHttpService } from './admin-orders-http.service';

describe('AdminOrdersHttpService', () => {
	let service: AdminOrdersHttpService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AdminOrdersHttpService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});