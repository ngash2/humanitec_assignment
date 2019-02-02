import { TestBed, inject } from '@angular/core/testing';

import { ProgramServiceService } from './program-service.service';

describe('ProgramServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramServiceService]
    });
  });

  it('should be created', inject([ProgramServiceService], (service: ProgramServiceService) => {
    expect(service).toBeTruthy();
  }));
});
