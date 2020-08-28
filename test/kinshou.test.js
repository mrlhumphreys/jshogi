import Kinshou from '../src/kinshou'
import KinBase from '../src/kin_base'

describe('Kinshou', () => {
  it('inherits from KinBase', () => {
    let ancestor = Object.getPrototypeOf(Kinshou.prototype);

    expect(ancestor.constructor).toEqual(KinBase);
  });
});
