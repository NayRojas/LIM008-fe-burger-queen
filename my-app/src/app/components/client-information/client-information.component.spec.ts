import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInformationComponent } from './client-information.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ClientInformationComponent', () => {
  let component: ClientInformationComponent;
  let fixture: ComponentFixture<ClientInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ ClientInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
