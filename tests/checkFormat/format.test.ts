import { isEmpty } from "../../src/checkFormat/format";
describe('isEmpty', () => {
    it('should return true when the value is null', () => {
      const result = isEmpty(null);
      expect(result).toBe(true);
    });
  
    it('should return true when the value is undefined', () => {
      const result = isEmpty(undefined);
      expect(result).toBe(true);
    });
  
    it('should return true when the value is an empty string', () => {
      const result = isEmpty('');
      expect(result).toBe(true);
    });
  
    it('should return false when the value is not null, undefined, or an empty string', () => {
      const result = isEmpty('some value');
      expect(result).toBe(false);
    });
  });