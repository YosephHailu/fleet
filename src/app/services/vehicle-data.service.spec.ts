import { TestBed } from '@angular/core/testing';

import { VehicleDataService } from './vehicle-data.service';

describe('VehicleDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleDataService = TestBed.get(VehicleDataService);
    expect(service).toBeTruthy();
  });
});
