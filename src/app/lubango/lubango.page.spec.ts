import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LubangoPage } from './lubango.page';

describe('LubangoPage', () => {
  let component: LubangoPage;
  let fixture: ComponentFixture<LubangoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LubangoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LubangoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
