import { TestBed } from '@angular/core/testing';
import { FirestoreService } from './firebase-service.service';

// import { FirebaseServiceService } from '../firebase-service/firebase-service.service';
// FirebaseServiceService

describe('FirebaseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoreService = TestBed.get(FirestoreService);
    expect(service).toBeTruthy();
  });
});
