import { TestBed } from '@angular/core/testing';

import { AddInstrumentGroupService } from './add-instrument-group.service';

describe('AddInstrumentGroupService', () => {
  let service: AddInstrumentGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddInstrumentGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
