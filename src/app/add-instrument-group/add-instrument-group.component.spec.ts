import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstrumentGroupComponent } from './add-instrument-group.component';

describe('AddInstrumentGroupComponent', () => {
  let component: AddInstrumentGroupComponent;
  let fixture: ComponentFixture<AddInstrumentGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddInstrumentGroupComponent]
    });
    fixture = TestBed.createComponent(AddInstrumentGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
