import { TestBed } from '@angular/core/testing';

import { NgbDateFormatterService } from './ngb-date-formatter.service';

describe('NgbDateFormatterService', () => {
	let service: NgbDateFormatterService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(NgbDateFormatterService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});