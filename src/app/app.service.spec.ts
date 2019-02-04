import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService]
    });
  });

  beforeEach(inject([AppService], s => {
    service = s;
  }));

  it('should be created', inject([AppService], (appService: AppService) => {
    expect(appService).toBeTruthy();
  }));

  it('should have get function defined', () => {
    expect(service.get).toBeDefined();
  });

  it('should have post function defined', () => {
    expect(service.post).toBeDefined();
  });

  it('should have put function defined', () => {
    expect(service.put).toBeDefined();
  });

  it('should have delete function defined', () => {
    expect(service.delete).toBeDefined();
  });
});
