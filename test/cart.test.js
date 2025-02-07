const ShoppingCart = require("../index");
const axios = require("axios");

jest.mock("axios"); // Mock axios to avoid real API calls

describe("ShoppingCart", () => {
    let cart;

    beforeEach(() => {
        cart = new ShoppingCart();
    });

    test("should add a product to the cart", async () => {
        axios.get.mockResolvedValue({ data: { price: 2.52 } });

        await cart.addProduct("cornflakes", 1);

        expect(cart.cart["cornflakes"]).toEqual({ quantity: 1, price: 2.52 });
    });

    test("should correctly calculate subtotal, tax, and total", async () => {
        axios.get.mockResolvedValueOnce({ data: { price: 2.52 } });
        axios.get.mockResolvedValueOnce({ data: { price: 9.98 } });

        await cart.addProduct("cornflakes", 1);
        await cart.addProduct("cornflakes", 1);
        await cart.addProduct("weetabix", 1);

        const totals = cart.calculateTotals();

        expect(totals).toEqual({
            subtotal: "15.02",
            tax: "1.88",
            total: "16.90",
        });
    });

    test("should handle product with no valid price", async () => {
        axios.get.mockRejectedValue(new Error("Product not found"));

        await cart.addProduct("unknown", 1);

        expect(cart.cart).toEqual({});
    });

    test("should correctly handle multiple quantities of the same product", async () => {
        axios.get.mockResolvedValue({ data: { price: 5.00 } });

        await cart.addProduct("bread", 2);
        await cart.addProduct("bread", 3);

        expect(cart.cart["bread"]).toEqual({ quantity: 5, price: 5.00 });
    });
});
