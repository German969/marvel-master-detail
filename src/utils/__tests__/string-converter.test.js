import { toHashPath, toSearchQuery } from '../string-converter';

describe('String converter', () => {
  it('should convert to hash path', () => {
    expect(toHashPath('3-D Man')).toBe('3-d_man');
  });

  it('should convert to search query', () => {
    expect(toSearchQuery('a-bomb_(has)')).toBe('a-bomb (has)')
  });
});