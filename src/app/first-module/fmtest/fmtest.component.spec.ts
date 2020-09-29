import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmtestComponent } from './fmtest.component';

describe('FmtestComponent', () => {
  let component: FmtestComponent;
  let fixture: ComponentFixture<FmtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
