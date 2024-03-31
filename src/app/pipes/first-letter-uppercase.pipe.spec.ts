import { FirstLetterUpperCasePipe } from "./first-letter-uppercase.pipe";

describe('FirstLetterUppercasePipe', () => {
  const pipe = new FirstLetterUpperCasePipe();

  it('transform the first letter to uppercase', () => {
    expect(pipe.transform('test')).toBe('Test');
  })
});
