import { TestBed } from '@angular/core/testing';

import { ManageCalibrationTeamService } from './manage-calibration-team.service';

describe('ManageCalibrationTeamService', () => {
  let service: ManageCalibrationTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageCalibrationTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
