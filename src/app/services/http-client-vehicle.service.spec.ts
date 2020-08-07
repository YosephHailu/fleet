import { TestBed } from '@angular/core/testing';

import { HttpClientVehicleService } from './http-client-vehicle.service';

describe('HttpClientVehicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientVehicleService = TestBed.get(HttpClientVehicleService);
    expect(service).toBeTruthy();
  });
});
