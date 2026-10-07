const { expect } = require('chai');
const request = require('supertest');
const app = require('../src/app');

// Integration tests: send real HTTP requests to the Express route,
// which then uses the hexToRgb library
describe('Integration tests: GET /api/hex-to-rgb', function () {
  it('returns 200 and the RGB value for a valid hex', async function () {
    const res = await request(app).get('/api/hex-to-rgb?hex=FF5733');

    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ hex: 'FF5733', rgb: { r: 255, g: 87, b: 51 } });
  });

  it('returns 400 for an invalid hex value', async function () {
    const res = await request(app).get('/api/hex-to-rgb?hex=ZZZZZZ');

    expect(res.status).to.equal(400);
    expect(res.body).to.deep.equal({ error: 'Invalid hex colour' });
  });

  it('returns 400 when the hex parameter is missing', async function () {
    const res = await request(app).get('/api/hex-to-rgb');

    expect(res.status).to.equal(400);
    expect(res.body).to.deep.equal({ error: 'Missing hex query parameter' });
  });
});