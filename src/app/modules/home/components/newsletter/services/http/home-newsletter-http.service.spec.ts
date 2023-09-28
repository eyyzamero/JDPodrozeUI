import { TestBed } from '@angular/core/testing';

import { HomeNewsletterHttpService } from './home-newsletter-http.service';

describe('HomeNewsletterHttpService', () => {
	let service: HomeNewsletterHttpService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(HomeNewsletterHttpService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});