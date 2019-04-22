import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitPageComponent } from './init-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('InitPageComponent', () => {
  let component: InitPageComponent;
  let fixture: ComponentFixture<InitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ InitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
