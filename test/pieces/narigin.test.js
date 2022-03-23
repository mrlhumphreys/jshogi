import Narigin from '../../src/pieces/narigin'
import KinBase from '../../src/pieces/kin_base'

describe('Narigin', () => {
  it('inherits from KinBase', () => {
    let ancestor = Object.getPrototypeOf(Narigin.prototype);

    expect(ancestor.constructor).toEqual(KinBase);
  });
});
