import Narikyou from '../src/narikyou'
import KinBase from '../src/kin_base'

describe('Narikyou', () => {
  it('inherits from KinBase', () => {
    let ancestor = Object.getPrototypeOf(Narikyou.prototype);

    expect(ancestor.constructor).toEqual(KinBase);
  });
});
