import { TestBed } from '@angular/core/testing';

import { FirebasenotificationsService } from './firebasenotifications.service';

describe('FirebasenotificationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebasenotificationsService = TestBed.get(FirebasenotificationsService);
    expect(service).toBeTruthy();
  });
});
