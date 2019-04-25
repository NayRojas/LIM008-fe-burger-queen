import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  const fireStoreServiceSpy: object = jasmine.createSpyObj('Platform', {firebase: ''});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ MenuComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: FireStoreService, useValue: fireStoreServiceSpy },
        { provide: ActivatedRoute,
          useValue: { paramMap: of(convertToParamMap({id: 1})) }
        }
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
