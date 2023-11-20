import { TestBed } from '@angular/core/testing';

import { CompanyDetailsApiService } from './company-details-api.service';

describe('CompanyDetailsApiService', () => {
  let service: CompanyDetailsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyDetailsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
