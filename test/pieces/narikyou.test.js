import Narikyou from '../../src/pieces/narikyou'
import KinBase from '../../src/pieces/kin_base'

describe('Narikyou', () => {
  it('inherits from KinBase', () => {
    let ancestor = Object.getPrototypeOf(Narikyou.prototype);

    expect(ancestor.constructor).toEqual(KinBase);
  });
});
