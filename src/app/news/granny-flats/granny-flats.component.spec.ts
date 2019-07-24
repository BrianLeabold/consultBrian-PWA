import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrannyFlatsComponent } from './granny-flats.component';

describe('GrannyFlatsComponent', () => {
  let component: GrannyFlatsComponent;
  let fixture: ComponentFixture<GrannyFlatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrannyFlatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrannyFlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
