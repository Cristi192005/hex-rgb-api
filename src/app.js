const express = require('express');
const hexToRgb = require('./hexToRgb');

const app = express();

/**
 * GET /api/hex-to-rgb?hex=<value>
 * Converts the hex value given in the query string to RGB.
 * Success: 200 with { hex, rgb: { r, g, b } }
 * Error:   400 with { error } if hex is missing or invalid.
 */
app.get('/api/hex-to-rgb', (req, res) => {
  const { hex } = req.query;

  // The hex query parameter is required
  if (!hex) {
    return res.status(400).json({ error: 'Missing hex query parameter' });
  }

  try {
    const rgb = hexToRgb(hex);
    return res.status(200).json({ hex, rgb });
  } catch (err) {
    // The library throws an error for invalid hex values
    return res.status(400).json({ error: err.message });
  }
});

// The app is exported without starting the server,
// so the integration tests can use it directly with Supertest.
module.exports = app;