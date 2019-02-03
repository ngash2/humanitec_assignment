import { TestBed } from '@angular/core/testing';

import { ActivitiesServiceService } from './activities-service.service';

describe('ActivitiesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivitiesServiceService = TestBed.get(ActivitiesServiceService);
    expect(service).toBeTruthy();
  });
});
