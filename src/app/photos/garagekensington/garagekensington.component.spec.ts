import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragekensingtonComponent } from './garagekensington.component';

describe('GaragekensingtonComponent', () => {
  let component: GaragekensingtonComponent;
  let fixture: ComponentFixture<GaragekensingtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaragekensingtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragekensingtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
