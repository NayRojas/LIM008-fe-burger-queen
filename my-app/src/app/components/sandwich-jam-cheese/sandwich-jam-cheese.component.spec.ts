import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichJamCheeseComponent } from './sandwich-jam-cheese.component';

describe('SandwichJamCheeseComponent', () => {
  let component: SandwichJamCheeseComponent;
  let fixture: ComponentFixture<SandwichJamCheeseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandwichJamCheeseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwichJamCheeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
