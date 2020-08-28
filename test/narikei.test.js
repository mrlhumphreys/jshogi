import Narikei from '../src/narikei'
import KinBase from '../src/kin_base'

describe('Narikei', () => {
  it('inherits from KinBase', () => {
    let ancestor = Object.getPrototypeOf(Narikei.prototype);

    expect(ancestor.constructor).toEqual(KinBase);
  });
});
