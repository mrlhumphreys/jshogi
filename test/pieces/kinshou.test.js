import Kinshou from '../../src/pieces/kinshou'
import KinBase from '../../src/pieces/kin_base'

describe('Kinshou', () => {
  it('inherits from KinBase', () => {
    let ancestor = Object.getPrototypeOf(Kinshou.prototype);

    expect(ancestor.constructor).toEqual(KinBase);
  });
});
