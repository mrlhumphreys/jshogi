import Narigin from '../src/narigin'
import KinBase from '../src/kin_base'

describe('Narigin', () => {
  it('inherits from KinBase', () => {
    let ancestor = Object.getPrototypeOf(Narigin.prototype);

    expect(ancestor.constructor).toEqual(KinBase);
  });
});
