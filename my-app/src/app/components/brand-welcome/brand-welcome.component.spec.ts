import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandWelcomeComponent } from './brand-welcome.component';

describe('BrandWelcomeComponent', () => {
  let component: BrandWelcomeComponent;
  let fixture: ComponentFixture<BrandWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
