import { TestBed } from '@angular/core/testing';

import { WebNotificationServiceService } from './web-notification-service.service';

describe('WebNotificationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebNotificationServiceService = TestBed.get(WebNotificationServiceService);
    expect(service).toBeTruthy();
  });
});
