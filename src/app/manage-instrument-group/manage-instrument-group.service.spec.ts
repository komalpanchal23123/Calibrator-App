import { TestBed } from '@angular/core/testing';

import { ManageInstrumentGroupService } from './manage-instrument-group.service';

describe('ManageInstrumentGroupService', () => {
  let service: ManageInstrumentGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageInstrumentGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
