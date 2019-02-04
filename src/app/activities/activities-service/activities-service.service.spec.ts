import { TestBed, inject } from '@angular/core/testing';

import { ActivitiesService } from './activities-service.service';
import { Activity, Activities } from '../activity';

describe('ActivitiesService', () => {
  let service;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(inject([ActivitiesService], s => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  function isActivity(arg: any): arg is Activity {
    return arg.name !== undefined && arg.workflowlevel1 !== undefined;
  }

  describe('#getActivities()', () => {
    it('should have getActivities function defined', () => {
      expect(service.getActivities).toBeDefined();
    });

    it('should return Activities', () => {
      const items: Activities = service.getPrograms();
      items.forEach(entry => {
        expect(isActivity(entry)).toBe(true, 'instance of Activity');
      });
    });
  });

  describe('#addActivity()', () => {
    it('should have addActivity function defined', () => {
      expect(service.addActivity).toBeDefined();
    });
  });

  it('should have updateActivity function defined', () => {
    expect(service.updateActivity).toBeDefined();
  });

  it('should have deleteActivity function defined', () => {
    expect(service.deleteActivity).toBeDefined();
  });
});
