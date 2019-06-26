import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenguelaPage } from './benguela.page';

describe('BenguelaPage', () => {
  let component: BenguelaPage;
  let fixture: ComponentFixture<BenguelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenguelaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenguelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
