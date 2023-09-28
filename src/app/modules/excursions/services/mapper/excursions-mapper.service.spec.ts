import { TestBed } from '@angular/core/testing';

import { ExcursionsMapperService } from './excursions-mapper.service';

describe('ExcursionsMapperService', () => {
  let service: ExcursionsMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcursionsMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
