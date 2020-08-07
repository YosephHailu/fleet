import { TestBed } from '@angular/core/testing';

import { HttpClientDispatchService } from './http-client-dispatch.service';

describe('HttpClientDispatchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientDispatchService = TestBed.get(HttpClientDispatchService);
    expect(service).toBeTruthy();
  });
});
