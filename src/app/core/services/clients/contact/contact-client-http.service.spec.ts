import { TestBed } from '@angular/core/testing';

import { ContactClientHttpService } from './contact-client-http.service';

describe('ContactClientHttpService', () => {
	let service: ContactClientHttpService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ContactClientHttpService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});