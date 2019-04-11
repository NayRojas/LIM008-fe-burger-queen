import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchDinerComponent } from './lunch-diner.component';

describe('LunchDinerComponent', () => {
  let component: LunchDinerComponent;
  let fixture: ComponentFixture<LunchDinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchDinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchDinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
