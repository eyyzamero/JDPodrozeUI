import { TestBed } from '@angular/core/testing';

import { AdminOrdersMapperService } from './admin-orders-mapper.service';

describe('AdminOrdersMapperService', () => {
	let service: AdminOrdersMapperService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AdminOrdersMapperService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});