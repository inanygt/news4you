import { TestBed } from '@angular/core/testing';

import { NwsapiService } from './nwsapi.service';

describe('NwsapiService', () => {
  let service: NwsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NwsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
