import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentDetailsComponent } from './instrument-details.component';

describe('InstrumentDetailsComponent', () => {
  let component: InstrumentDetailsComponent;
  let fixture: ComponentFixture<InstrumentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumentDetailsComponent]
    });
    fixture = TestBed.createComponent(InstrumentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
