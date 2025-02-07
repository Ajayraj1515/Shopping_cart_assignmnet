# Shopping Cart Assignment

## Overview
This is a simple Shopping Cart application built using **Node.js** and **Axios** for fetching product prices from an API. The application allows users to:
- Add products to the cart.
- Fetch product prices from an API.
- Calculate subtotal, tax, and total.
- Display the shopping cart details.
- Run unit tests to validate the functionality.

## Features
✅ Fetch product prices from an API dynamically.
✅ Add products to the cart with quantity tracking.
✅ Compute the subtotal, tax, and total amount.
✅ Handle cases where products are not found or have invalid prices.
✅ Unit tests for both business logic and API interactions.
✅ Clear logging and error handling.
✅ Instructions on how to test the solution.

---

## Project Structure
```
shopping-cart-assignment/
│── test/                # Unit tests for the shopping cart
│── index.js             # Main application logic
│── db.json              # Mock database for API testing
│── package.json         # Project dependencies and scripts
│── package-lock.json    # Auto-generated lock file
│── .gitignore           # Files to ignore in Git commits
│── README.md            # Project documentation (this file)
```

---

## Installation
### 1. Clone the Repository
```sh
git clone https://github.com/Ajayraj1515/Shopping_cart_assignmnet.git
cd shopping-cart-assignment
```
### 2. Install Dependencies
```sh
npm install
```
### 3. Start the API Server (if using local database)
You can use **json-server** to serve `db.json`:
```sh
npx json-server --watch db.json --port 3001
```
### 4. Run the Shopping Cart Script
```sh
node index.js
```

---

## Running Tests
Unit tests are written using **Jest**.
### 1. Run Tests
```sh
npm test
```
### 2. Expected Test Cases:
✅ Add products to the cart correctly.
✅ Calculate subtotal, tax, and total accurately.
✅ Handle API errors when fetching prices.
✅ Ensure cart logic behaves as expected.
✅ Test utility functions for correctness.

---

## Assumptions & Trade-offs
- Prices are fetched dynamically via API calls (can be mocked in tests).
- The tax rate is fixed at **12.5%**.
- If an API call fails, the product is skipped.
- Products are identified by name (case-sensitive).
- Uses **json-server** for testing API behavior locally.
- Unit tests cover core functionality, but edge cases may require additional testing.

---

## How to Test the Solution
1. Ensure `json-server` is running (`db.json` is served on `http://localhost:3001/products/`).
2. Run `node index.js` to check console logs.
3. Run unit tests using `npm test`.
4. Modify `db.json` to add more products and test additional cases.
5. Check error handling by making API unavailable temporarily.

---


