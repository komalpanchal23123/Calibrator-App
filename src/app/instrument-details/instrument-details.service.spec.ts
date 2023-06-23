import { TestBed } from '@angular/core/testing';

import { InstrumentDetailsService } from './instrument-details.service';

describe('InstrumentDetailsService', () => {
  let service: InstrumentDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstrumentDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
