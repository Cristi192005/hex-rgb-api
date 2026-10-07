/**
 * Converts a hex colour value to an RGB object.
 *
 * Accepted formats (case-insensitive, "#" is optional):
 *   - 6 digits, e.g. "#FF5733" or "ff5733"
 *   - 3 digits (shorthand), e.g. "#F53" -> "#FF5533"
 *
 * @param {string} hex - The hex colour value to convert.
 * @returns {{r: number, g: number, b: number}} RGB values from 0 to 255.
 * @throws {Error} If the input is not a valid hex colour.
 */
function hexToRgb(hex) {
  // Only strings can be valid hex values
  if (typeof hex !== 'string') {
    throw new Error('Invalid hex colour');
  }

  // Remove the optional "#" at the start
  let value = hex.trim().replace(/^#/, '');

  // Expand 3-digit shorthand, e.g. "F53" -> "FF5533"
  if (/^[0-9a-fA-F]{3}$/.test(value)) {
    value = value.split('').map((char) => char + char).join('');
  }

  // After expanding, the value must be exactly 6 hex digits
  if (!/^[0-9a-fA-F]{6}$/.test(value)) {
    throw new Error('Invalid hex colour');
  }

  // Convert each pair of hex digits to a decimal number (base 16)
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

module.exports = hexToRgb;