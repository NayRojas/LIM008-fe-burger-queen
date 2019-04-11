import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitressGetNameComponent } from './waitress-get-name.component';

describe('WaitressGetNameComponent', () => {
  let component: WaitressGetNameComponent;
  let fixture: ComponentFixture<WaitressGetNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitressGetNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitressGetNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
