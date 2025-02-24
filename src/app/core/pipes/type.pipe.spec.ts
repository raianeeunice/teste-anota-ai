import { TypePipe } from './type.pipe';

describe('TypePipe', () => {
  let pipe: TypePipe;

  beforeEach(() => {
    pipe = new TypePipe();
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform "1" into "Paisagem"', () => {
    expect(pipe.transform('1')).toBe('Paisagem');
  });

  it('should transform "2" into "Flor"', () => {
    expect(pipe.transform('2')).toBe('Flor');
  });

  it('should transform "3" into "Pizza"', () => {
    expect(pipe.transform('3')).toBe('Pizza');
  });

  it('should return undefined for unknown values', () => {
    expect(pipe.transform('999')).toBeUndefined();
  });
});
