import {formatCurrency} from '../../src/utils/helpers';

describe('formatCurrency', () => {
  it('should format a number to currency string', () => {
    expect(formatCurrency(123456789)).toBe('123,456,789');
    expect(formatCurrency(987654.32)).toBe('987,654');
    expect(formatCurrency(1000)).toBe('1,000');
    expect(formatCurrency(0)).toBe('0');
  });

  it('should return "0" for non-numeric values', () => {
    expect(formatCurrency('string')).toEqual('0');
    expect(formatCurrency(null)).toEqual('0');
    expect(formatCurrency(undefined)).toEqual('0');
  });
});
