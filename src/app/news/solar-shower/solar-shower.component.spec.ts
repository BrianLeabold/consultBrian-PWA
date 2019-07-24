import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarShowerComponent } from './solar-shower.component';

describe('SolarShowerComponent', () => {
  let component: SolarShowerComponent;
  let fixture: ComponentFixture<SolarShowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarShowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
