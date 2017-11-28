import { TestBed, inject } from '@angular/core/testing';

import { RouteUrlService } from './route-url.service';

describe('RouteUrlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteUrlService]
    });
  });

  it('should be created', inject([RouteUrlService], (service: RouteUrlService) => {
    expect(service).toBeTruthy();
  }));
});
