import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CptoiletComponent } from './cptoilet.component';

describe('CptoiletComponent', () => {
  let component: CptoiletComponent;
  let fixture: ComponentFixture<CptoiletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CptoiletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CptoiletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
