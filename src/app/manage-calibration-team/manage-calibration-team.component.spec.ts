import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCalibrationTeamComponent } from './manage-calibration-team.component';

describe('ManageCalibrationTeamComponent', () => {
  let component: ManageCalibrationTeamComponent;
  let fixture: ComponentFixture<ManageCalibrationTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageCalibrationTeamComponent]
    });
    fixture = TestBed.createComponent(ManageCalibrationTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
