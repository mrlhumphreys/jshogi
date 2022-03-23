import Tokin from '../../src/pieces/tokin'
import KinBase from '../../src/pieces/kin_base'

describe('Tokin', () => {
  it('inherits from KinBase', () => {
    let ancestor = Object.getPrototypeOf(Tokin.prototype);

    expect(ancestor.constructor).toEqual(KinBase);
  });
});
