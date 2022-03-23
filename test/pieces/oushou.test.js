import Oushou from '../../src/pieces/oushou'
import OuBase from '../../src/pieces/ou_base'

describe('Oushou', () => {
  it('inherits from ouBase', () => {
    let ancestor = Object.getPrototypeOf(Oushou.prototype);    
    expect(ancestor.constructor).toEqual(OuBase);
  });
});
