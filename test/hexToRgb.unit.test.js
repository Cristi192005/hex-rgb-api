const { expect } = require('chai');
const hexToRgb = require('../src/hexToRgb');

// Unit tests: test the hexToRgb function directly, without the API
describe('Unit tests: hexToRgb()', function () {
  it('converts a 6-digit hex value with #', function () {
    expect(hexToRgb('#FF5733')).to.deep.equal({ r: 255, g: 87, b: 51 });
  });

  it('converts a 6-digit hex value without #', function () {
    expect(hexToRgb('00FF00')).to.deep.equal({ r: 0, g: 255, b: 0 });
  });

  it('converts a 3-digit shorthand hex value', function () {
    expect(hexToRgb('#F53')).to.deep.equal({ r: 255, g: 85, b: 51 });
  });

  it('accepts lowercase letters', function () {
    expect(hexToRgb('#ffffff')).to.deep.equal({ r: 255, g: 255, b: 255 });
  });

  it('throws an error for an invalid hex value', function () {
    expect(() => hexToRgb('#GGGGGG')).to.throw('Invalid hex colour');
  });

  it('throws an error for a value with the wrong length', function () {
    expect(() => hexToRgb('#12345')).to.throw('Invalid hex colour');
  });
});