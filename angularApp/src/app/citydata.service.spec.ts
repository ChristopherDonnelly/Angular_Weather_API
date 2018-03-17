import { TestBed, inject } from '@angular/core/testing';

import { CityDataService } from './citydata.service';

describe('CityDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityDataService]
    });
  });

  it('should be created', inject([CityDataService], (service: CityDataService) => {
    expect(service).toBeTruthy();
  }));
});
