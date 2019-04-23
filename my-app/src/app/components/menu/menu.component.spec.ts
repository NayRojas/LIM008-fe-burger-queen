import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Params, convertToParamMap } from '@angular/router';
import { FireStoreService } from '../../services/firebase-service/firebase-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';


xdescribe('MenuComponent', () => {
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
