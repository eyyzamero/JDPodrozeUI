import { TestBed } from '@angular/core/testing';

import { AdminUsersMapperService } from './admin-users-mapper.service';

describe('AdminUsersMapperService', () => {
    let service: AdminUsersMapperService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AdminUsersMapperService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});