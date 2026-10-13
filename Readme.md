# Hex to RGB REST API

A small JavaScript library that converts hex colour values to RGB, and an Express REST API that uses it. The project includes unit tests and integration tests.

## Requirements

- Node.js and npm

## Installation

```bash
git clone https://github.com/Cristi192005/hex-rgb-api.git
cd hex-rgb-api
npm install
```

## Running the API

```bash
npm start
```

The server starts at http://localhost:3000.

Example request:

```bash
curl.exe -i "http://localhost:3000/api/hex-to-rgb?hex=FF5733"
```

Response:

```json
{"hex":"FF5733","rgb":{"r":255,"g":87,"b":51}}
```

## Running the tests

```bash
npm test
```

## Project structure

- `src/hexToRgb.js` – hex to RGB library
- `src/app.js` – Express API route
- `src/server.js` – starts the server
- `test/hexToRgb.unit.test.js` – unit tests
- `test/api.integration.test.js` – integration tests