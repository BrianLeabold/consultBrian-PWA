import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompostingTolietComponent } from './composting-toliet.component';

describe('CompostingTolietComponent', () => {
  let component: CompostingTolietComponent;
  let fixture: ComponentFixture<CompostingTolietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompostingTolietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompostingTolietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
