const axios = require("axios");

class ShoppingCart {
    constructor() {
        this.cart = {};
        this.taxRate = 0.125; //tax
    }

    // Fetch product price from API
    async getPrice(productName) {
        try {
            const response = await axios.get(`http://localhost:3001/products/${productName}`);
            return response.data.price;
        } catch (error) {
            console.error(`Error fetching price for ${productName}:`, error.message);
            return 0;
        }
    }

    // Add product to cart
    async addProduct(productName, quantity) {
        const price = await this.getPrice(productName);
        if (price === 0) {
            console.log(`Skipping ${productName} as it has no valid price.`);
            return;
        }
        if (!this.cart[productName]) {
            this.cart[productName] = { quantity: 0, price };
        }
        this.cart[productName].quantity += quantity;
        console.log(`Added ${quantity} × ${productName} @ ${price.toFixed(2)} each`);
    }

    // Calculate cart totals
    calculateTotals() {
        let subtotal = 0;
        for (const item in this.cart) {
            subtotal += this.cart[item].quantity * this.cart[item].price;
        }
        const tax = subtotal * this.taxRate;
        const total = subtotal + tax;

        return {
            subtotal: subtotal.toFixed(2),
            tax: tax.toFixed(2),
            total: total.toFixed(2),
        };
    }

    // Display cart
    displayCart() {
        console.log("\n🛒 Shopping Cart:");
        for (const [product, details] of Object.entries(this.cart)) {
            console.log(`${details.quantity} × ${product} @ ${details.price.toFixed(2)} each`);
        }
        const totals = this.calculateTotals();
        console.log(`Subtotal: $${totals.subtotal}`);
        console.log(`Tax (12.5%): $${totals.tax}`);
        console.log(`Total: $${totals.total}`);
    }
}

// Test case execution
(async () => {
    const cart = new ShoppingCart();

    await cart.addProduct("cornflakes", 1);
    await cart.addProduct("cornflakes", 1); 
    await cart.addProduct("weetabix", 1);   

    cart.displayCart();
})();
