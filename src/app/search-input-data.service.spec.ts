import { TestBed } from '@angular/core/testing';

import { SearchInputDataService } from './search-input-data.service';

describe('SearchInputDataService', () => {
  let service: SearchInputDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchInputDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
