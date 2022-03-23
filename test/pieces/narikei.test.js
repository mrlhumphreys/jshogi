import Narikei from '../../src/pieces/narikei'
import KinBase from '../../src/pieces/kin_base'

describe('Narikei', () => {
  it('inherits from KinBase', () => {
    let ancestor = Object.getPrototypeOf(Narikei.prototype);

    expect(ancestor.constructor).toEqual(KinBase);
  });
});
