import Gyokushou from '../src/gyokushou'
import OuBase from '../src/ou_base'

describe('Gyokushou', () => {
  it('inherits from ouBase', () => {
    let ancestor = Object.getPrototypeOf(Gyokushou.prototype);    
    expect(ancestor.constructor).toEqual(OuBase);
  });
});
