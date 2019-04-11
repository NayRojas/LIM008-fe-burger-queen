import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToServeComponent } from './ready-to-serve.component';

describe('ReadyToServeComponent', () => {
  let component: ReadyToServeComponent;
  let fixture: ComponentFixture<ReadyToServeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyToServeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyToServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});