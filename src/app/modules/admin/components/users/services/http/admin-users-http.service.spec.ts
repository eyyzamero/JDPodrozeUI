import { TestBed } from '@angular/core/testing';

import { AdminUsersHttpService } from './admin-users-http.service';

describe('AdminUsersHttpService', () => {
  let service: AdminUsersHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUsersHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
