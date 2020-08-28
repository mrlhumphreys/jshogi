import Oushou from '../src/oushou'
import OuBase from '../src/ou_base'

describe('Oushou', () => {
  it('inherits from ouBase', () => {
    let ancestor = Object.getPrototypeOf(Oushou.prototype);    
    expect(ancestor.constructor).toEqual(OuBase);
  });
});
