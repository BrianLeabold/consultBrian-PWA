import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagstoneComponent } from './flagstone.component';

describe('FlagstoneComponent', () => {
  let component: FlagstoneComponent;
  let fixture: ComponentFixture<FlagstoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagstoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
