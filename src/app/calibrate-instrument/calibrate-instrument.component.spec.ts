import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrateInstrumentComponent } from './calibrate-instrument.component';

describe('CalibrateInstrumentComponent', () => {
  let component: CalibrateInstrumentComponent;
  let fixture: ComponentFixture<CalibrateInstrumentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalibrateInstrumentComponent]
    });
    fixture = TestBed.createComponent(CalibrateInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
