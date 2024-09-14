import { TestBed } from '@angular/core/testing';

import { AdminUsersListDataService } from './admin-users-list-data.service';

describe('AdminUsersListDataService', () => {
    let service: AdminUsersListDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AdminUsersListDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});