import { TestBed } from '@angular/core/testing';

import { AdminOrdersDetailsDataService } from './admin-orders-details-data.service';

describe('AdminOrdersDetailsDataService', () => {
    let service: AdminOrdersDetailsDataService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AdminOrdersDetailsDataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});