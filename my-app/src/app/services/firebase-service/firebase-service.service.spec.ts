import { TestBed } from '@angular/core/testing';
import { FireStoreService } from './firebase-service.service';

xdescribe('FireStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireStoreService = TestBed.get(FireStoreService);
    expect(service).toBeTruthy();
  });
});
