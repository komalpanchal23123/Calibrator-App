import { TestBed } from '@angular/core/testing';

import { AddEditInstrumentService } from './add-edit-instrument.service';

describe('AddEditInstrumentService', () => {
  let service: AddEditInstrumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddEditInstrumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
