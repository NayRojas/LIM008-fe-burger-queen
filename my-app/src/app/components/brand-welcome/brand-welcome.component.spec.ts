import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandWelcomeComponent } from './brand-welcome.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BrandWelcomeComponent', () => {
  let component: BrandWelcomeComponent;
  let fixture: ComponentFixture<BrandWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ BrandWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
