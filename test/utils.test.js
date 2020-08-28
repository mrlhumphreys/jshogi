import { compact, exists } from '../src/utils'

describe('compact', () => {
  it('must return a new array without nulls', () => {
    let array = [1, null, 3];
    let result = compact(array);
    let expected = [1, 3];
    expect(result).toEqual(expected);
  });
});

describe("exists", () => {
  describe("with null", () => {
    it("must return false", () => {
      let result = exists(null);
      expect(result).toBe(false);
    });
  });

  describe("with undefined", () => {
    it("must return false", () => {
      let result = exists(undefined);
      expect(result).toBe(false);
    });
  });

  describe("with object", () => {
    it("must return true", () => {
      let result = exists({});
      expect(result).toBe(true);
    });
  });

  describe("with array", () => {
    it("must return true", () => {
      let result = exists([]);
      expect(result).toBe(true);
    });
  });

  describe("with string", () => {
    it("must return true", () => {
      let result = exists("string");
      expect(result).toBe(true);
    });
  });

  describe("with number", () => {
    it("must return true", () => {
      let result = exists(1);
      expect(result).toBe(true);
    });
  });
});
