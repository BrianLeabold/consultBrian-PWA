import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtpaintkensingtonComponent } from './extpaintkensington.component';

describe('ExtpaintkensingtonComponent', () => {
  let component: ExtpaintkensingtonComponent;
  let fixture: ComponentFixture<ExtpaintkensingtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtpaintkensingtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtpaintkensingtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
