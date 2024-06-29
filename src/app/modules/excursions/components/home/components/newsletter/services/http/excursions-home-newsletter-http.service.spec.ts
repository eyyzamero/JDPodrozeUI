import { TestBed } from '@angular/core/testing';

import { ExcursionsHomeNewsletterHttpService } from './excursions-home-newsletter-http.service';

describe('ExcursionsHomeNewsletterHttpService', () => {
    let service: ExcursionsHomeNewsletterHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ExcursionsHomeNewsletterHttpService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});