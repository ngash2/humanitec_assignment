import {
  LoadPrograms,
  ProgramActionTypes,
  LoadProgramsFail,
  LoadProgramsSuccess
} from './program.actions';
import { Programs, Program } from '../program';

describe('ProgramActions', () => {
  describe('LoadPrograms', () => {
    it('should create an action', () => {
      const action = new LoadPrograms();

      expect({ ...action }).toEqual({
        type: ProgramActionTypes.LoadPrograms
      });
    });
  });

  describe('LoadProgramsFail', () => {
    it('should create an action', () => {
      const action = new LoadProgramsFail({ error: '' });

      expect({ ...action }).toEqual({
        type: ProgramActionTypes.LoadProgramsFail,
        payload: { error: '' }
      });
    });
  });

  describe('LoadProgramsSuccess', () => {
    it('should create an action', () => {
      const programs: Programs = [{ id: 564, name: '1234567890' } as Program];
      const action = new LoadProgramsSuccess(programs);

      expect({ ...action }).toEqual({
        type: ProgramActionTypes.LoadProgramsSuccess,
        payload: programs
      });
    });
  });
});
