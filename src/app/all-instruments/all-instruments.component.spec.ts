import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInstrumentsComponent } from './all-instruments.component';

describe('AllInstrumentsComponent', () => {
  let component: AllInstrumentsComponent;
  let fixture: ComponentFixture<AllInstrumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllInstrumentsComponent]
    });
    fixture = TestBed.createComponent(AllInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
