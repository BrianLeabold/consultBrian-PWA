import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeilingRepairComponent } from './ceiling-repair.component';

describe('CeilingRepairComponent', () => {
  let component: CeilingRepairComponent;
  let fixture: ComponentFixture<CeilingRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeilingRepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeilingRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
