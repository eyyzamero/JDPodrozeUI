import { TestBed } from '@angular/core/testing';

import { AccountClientHttpService } from './account-client-http.service';

describe('AccountClientHttpService', () => {
    let service: AccountClientHttpService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AccountClientHttpService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});