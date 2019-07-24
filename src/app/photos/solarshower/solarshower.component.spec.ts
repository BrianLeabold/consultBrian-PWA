import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarshowerComponent } from './solarshower.component';

describe('SolarshowerComponent', () => {
  let component: SolarshowerComponent;
  let fixture: ComponentFixture<SolarshowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarshowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarshowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
