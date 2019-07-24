import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaragedehesaComponent } from './garagedehesa.component';

describe('GaragedehesaComponent', () => {
  let component: GaragedehesaComponent;
  let fixture: ComponentFixture<GaragedehesaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaragedehesaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaragedehesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
