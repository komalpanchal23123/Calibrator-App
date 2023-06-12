import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageInstrumentGroupComponent } from './manage-instrument-group.component';

describe('ManageInstrumentGroupComponent', () => {
  let component: ManageInstrumentGroupComponent;
  let fixture: ComponentFixture<ManageInstrumentGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageInstrumentGroupComponent]
    });
    fixture = TestBed.createComponent(ManageInstrumentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
