import Tokin from '../src/tokin'
import KinBase from '../src/kin_base'

describe('Tokin', () => {
  it('inherits from KinBase', () => {
    let ancestor = Object.getPrototypeOf(Tokin.prototype);

    expect(ancestor.constructor).toEqual(KinBase);
  });
});
