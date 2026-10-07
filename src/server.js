const app = require('./app');

// Port for the REST API (3000 by default)
const PORT = process.env.PORT || 3000;

// Start the server so the API can be tested with Postman or cURL
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});