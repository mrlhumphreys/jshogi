import Gyokushou from '../../src/pieces/gyokushou'
import OuBase from '../../src/pieces/ou_base'

describe('Gyokushou', () => {
  it('inherits from ouBase', () => {
    let ancestor = Object.getPrototypeOf(Gyokushou.prototype);    
    expect(ancestor.constructor).toEqual(OuBase);
  });
});
