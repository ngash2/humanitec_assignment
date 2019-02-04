import { TestBed, inject } from '@angular/core/testing';

import { ProgramService } from './program-service.service';
import { Programs, Program } from '@app/programs/program';

describe('ProgramServiceService', () => {
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramService]
    });
  });

  beforeEach(inject([ProgramService], s => {
    service = s;
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getPrograms()', () => {
    function isProgram(arg: any): arg is Program {
      return arg.name !== undefined;
    }
    it('should have getPrograms function defined', () => {
      expect(service.getPrograms).toBeDefined();
    });

    it('should return Programs', () => {
      const items: Programs = service.getPrograms();
      items.forEach(entry => {
        expect(isProgram(entry)).toBe(true, 'instance of Program');
      });
    });
  });
});
